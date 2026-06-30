<?php
// filepath: server/api/admin/reject.php
// PURPOSE: Admin rejects a pending user registration with a reason
// METHOD: POST
// REQUEST BODY: { user_id, reason }
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
$reason  = trim($body['reason'] ?? '');

if ($user_id <= 0) {
    sendError("Invalid user ID");
}

if (empty($reason)) {
    sendError("Rejection reason is required");
}

$conn = getDBConnection();

$stmt = $conn->prepare(
    "UPDATE users SET status = 'rejected', rejection_reason = ? WHERE id = ? AND status = 'pending'"
);
$stmt->bind_param("si", $reason, $user_id);
$stmt->execute();

if ($stmt->affected_rows === 0) {
    $stmt->close();
    $conn->close();
    sendError("User not found or already processed", 404);
}

$stmt->close();
$conn->close();

sendSuccess("User rejected successfully");