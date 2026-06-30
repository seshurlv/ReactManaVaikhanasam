<?php
// filepath: server/api/admin/pending_users.php
// PURPOSE: Returns list of all pending user registrations for admin review
// METHOD: GET
// HEADERS: Authorization: Bearer <token>
// RESPONSE: { success, message, data: { users: [...] } }

require_once '../../middleware/cors.php';
require_once '../../config/database.php';
require_once '../../helpers/response.php';
require_once '../../helpers/auth.php';

setCORSHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendError("Method not allowed", 405);
}

// Verify admin is logged in
verifyAdminToken();

$conn = getDBConnection();

$stmt = $conn->prepare(
    "SELECT id, full_name, gotram, phone, email, address, created_at
     FROM users
     WHERE status = 'pending'
     ORDER BY created_at DESC"
);
$stmt->execute();
$result = $stmt->get_result();

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

$stmt->close();
$conn->close();

sendSuccess("Pending users fetched", ["users" => $users]);