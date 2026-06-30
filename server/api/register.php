<?php
// filepath: server/api/register.php
// PURPOSE: Handles new user registration requests
// METHOD: POST
// REQUEST BODY: { full_name, gotram, phone, email, username, password }
// RESPONSE: { success, message }

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

require_once '../middleware/cors.php';
require_once '../config/database.php';
require_once '../helpers/response.php';

setCORSHeaders();

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError("Method not allowed", 405);
}

// Read and decode JSON body sent from React
$body = json_decode(file_get_contents("php://input"), true);

if (!$body) {
    sendError("Invalid request body");
}

// Extract fields
$full_name = trim($body['full_name'] ?? '');
$gotram    = trim($body['gotram']    ?? '');
$phone     = trim($body['phone']     ?? '');
$email     = trim($body['email']     ?? '');
$password  = $body['password'] ?? '';

// ---- Server-side Validation ----
// (Never trust frontend validation alone)

if (strlen($full_name) < 3) {
    sendError("Full name must be at least 3 characters");
}

if (empty($gotram)) {
    sendError("Gotram is required");
}

if (!preg_match('/^\+?[0-9]{10}$/', $phone)) {
    sendError("Invalid phone number format");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendError("Invalid email address");
}

if (strlen($password) < 8 || !preg_match('/[A-Z]/', $password) || !preg_match('/[0-9]/', $password)) {
    sendError("Password must be 8+ characters with at least one uppercase letter and one number");
}

// ---- Database Operations ----

$conn = getDBConnection();

// Check for duplicate email or phone
$checkStmt = $conn->prepare(
    "SELECT id FROM users WHERE email = ? OR phone = ? LIMIT 1"
);
$checkStmt->bind_param("ss", $email, $phone);
$checkStmt->execute();
$checkStmt->store_result();

if ($checkStmt->num_rows > 0) {
    $checkStmt->close();
    $conn->close();
    sendError("Email or phone number is already registered", 409);
}
$checkStmt->close();

// Hash password securely using bcrypt
$password_hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);

// Insert new user with 'pending' status
$insertStmt = $conn->prepare(
    "INSERT INTO users (full_name, gotram, phone, email, password_hash, status)
     VALUES (?, ?, ?, ?, ?, 'pending')"
);
$insertStmt->bind_param(
    "sssss",
    $full_name,
    $gotram,
    $phone,
    $email,
    $password_hash
);

if ($insertStmt->execute()) {
    $insertStmt->close();
    $conn->close();
    sendSuccess(
        "Registration successful! Your request is pending admin approval.",
        null,
        201
    );
} else {
    $insertStmt->close();
    $conn->close();
    sendError("Registration failed. Please try again.", 500);
}   