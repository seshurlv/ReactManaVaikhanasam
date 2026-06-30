<?php
// filepath: server/api/admin/approve.php
// PURPOSE: Admin approves a pending user registration
// METHOD: POST
// REQUEST BODY: { user_id }
// HEADERS: Authorization: Bearer <token>

require_once '../../middleware/cors.php';
require_once '../../config/database.php';
require_once '../../helpers/response.php';
require_once '../../helpers/auth.php';

setCORSHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError("Method not allowed", 405);
}

verifyAdminToken();

$body = json_decode(file_get_contents("php://input"), true);
$user_id = intval($body['user_id'] ?? 0);

if ($user_id <= 0) {
    sendError("Invalid user ID");
}

$conn = getDBConnection();

$stmt = $conn->prepare(
    "UPDATE users SET status = 'approved' WHERE id = ? AND status = 'pending'"
);
$stmt->bind_param("i", $user_id);
$stmt->execute();

if ($stmt->affected_rows === 0) {
    $stmt->close();
    $conn->close();
    sendError("User not found or already processed", 404);
}

$stmt->close();
$conn->close();

sendSuccess("User approved successfully");