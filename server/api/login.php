<?php
// filepath: server/api/login.php
// PURPOSE: User authentication - validates mobile (phone) + password from users table
// METHOD: POST
// REQUEST BODY: { mobile, password }
// RESPONSE: { success, message, data: { token, user: { id, full_name, phone, email, role } } }

require_once '../middleware/cors.php';
require_once '../config/database.php';
require_once '../helpers/response.php';

setCORSHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError("Method not allowed", 405);
}

$body = json_decode(file_get_contents("php://input"), true);

$mobile   = trim($body['mobile']   ?? '');
$password = $body['password'] ?? '';

if (empty($mobile) || empty($password)) {
    sendError("Mobile number and password are required");
}

$conn = getDBConnection();

$stmt = $conn->prepare(
    "SELECT id, full_name, phone, email, password_hash, status
     FROM users
     WHERE phone = ?
     LIMIT 1"
);
$stmt->bind_param("s", $mobile);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
$stmt->close();
$conn->close();

if (!$user || !password_verify($password, $user['password_hash'])) {
    sendError("Invalid mobile number or password", 401);
}

if ($user['status'] === 'pending') {
    sendError("Your account is pending admin approval. Please wait for activation.", 403);
}

if ($user['status'] === 'rejected') {
    sendError("Your account has been rejected. Please contact the administrator.", 403);
}

// Generate a secure session token
$token = base64_encode(
    json_encode([
        "id"    => $user['id'],
        "name"  => $user['full_name'],
        "phone" => $user['phone'],
        "role"  => "user",
        "exp"   => time() + (8 * 60 * 60), // 8 hours expiry
        "sig"   => hash_hmac(
                    'sha256',
                    $user['id'] . $user['phone'],
                    getenv('JWT_SECRET') ?: 'mv_secret_change_in_production'
                  )
    ])
);

sendSuccess("Login successful", [
    "token" => $token,
    "user"  => [
        "id"        => $user['id'],
        "full_name" => $user['full_name'],
        "phone"     => $user['phone'],
        "email"     => $user['email'],
        "role"      => "user"
    ]
]);
