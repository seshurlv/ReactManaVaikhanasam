<?php
// filepath: server/api/admin/login.php
// PURPOSE: Admin authentication - returns a JWT-like session token
// METHOD: POST
// REQUEST BODY: { username, password }
// RESPONSE: { success, message, data: { token } }
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once '../../middleware/cors.php';
require_once '../../config/database.php';
require_once '../../helpers/response.php';

setCORSHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError("Method not allowed", 405);
}

$body = json_decode(file_get_contents("php://input"), true);

$username = trim($body['username'] ?? '');
$password = $body['password'] ?? '';

if (empty($username) || empty($password)) {
    sendError("Username and password are required");
}

$conn = getDBConnection();

$stmt = $conn->prepare(
    "SELECT id, username, password_hash FROM admins WHERE username = ? LIMIT 1"
);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$admin = $result->fetch_assoc();
$stmt->close();
$conn->close();

// Verify password against bcrypt hash
// Migration guard: if the stored value is plain text (not a bcrypt hash yet),
// compare directly and upgrade it to bcrypt on first successful login.
$isHashed = str_starts_with($admin['password_hash'], '$2y$');

if ($isHashed) {
    $passwordValid = password_verify($password, $admin['password_hash']);
} else {
    $passwordValid = ($password === $admin['password_hash']);
}

if (!$admin || !$passwordValid) {
    sendError("Invalid username or password", 401);
}

// One-time migration: replace plain-text password with bcrypt hash
if (!$isHashed) {
    $newHash = password_hash($password, PASSWORD_BCRYPT);
    $migrateConn = getDBConnection();
    $migrateStmt = $migrateConn->prepare(
        "UPDATE admins SET password_hash = ? WHERE id = ?"
    );
    $migrateStmt->bind_param("si", $newHash, $admin['id']);
    $migrateStmt->execute();
    $migrateStmt->close();
    $migrateConn->close();
}

// Generate a secure session  
// This token will be sent with every admin API request
$token = base64_encode(
    json_encode([
        "id"       => $admin['id'],
        "username" => $admin['username'],
        "role"     => "admin",
        "exp"      => time() + (8 * 60 * 60), // 8 hours expiry
        "sig"      => hash_hmac(
                        'sha256',
                        $admin['id'] . $admin['username'],
                        getenv('JWT_SECRET') ?: 'mv_secret_change_in_production'
                      )
    ])
);

sendSuccess("Login successful", ["token" => $token]);