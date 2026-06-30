<?php
// filepath: server/api/admin/users.php
// PURPOSE: Returns list of all users, optionally filtered by status
// METHOD: GET
// HEADERS: Authorization: Bearer <token>
// QUERY PARAMS: ?status=pending|approved|rejected (optional, returns all if omitted)
// RESPONSE: { success, message, data: { users: [...], total: N } }

require_once '../../middleware/cors.php';
require_once '../../config/database.php';
require_once '../../helpers/response.php';
require_once '../../helpers/auth.php';

setCORSHeaders();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendError("Method not allowed", 405);
}

verifyAdminToken();

$allowed_statuses = ['pending', 'approved', 'rejected'];
$status = $_GET['status'] ?? null;

$conn = getDBConnection();

if ($status !== null) {
    if (!in_array($status, $allowed_statuses)) {
        sendError("Invalid status filter. Must be: pending, approved, or rejected");
    }
    $stmt = $conn->prepare(
        "SELECT id, full_name, gotram, phone, email, username, status, created_at
         FROM users
         WHERE status = ?
         ORDER BY created_at DESC"
    );
    $stmt->bind_param("s", $status);
} else {
    $stmt = $conn->prepare(
        "SELECT id, full_name, gotram, phone, email, username, status, created_at
         FROM users
         ORDER BY created_at DESC"
    );
}

$stmt->execute();
$result = $stmt->get_result();

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

$stmt->close();
$conn->close();

sendSuccess("Users fetched", [
    "users" => $users,
    "total" => count($users)
]);
