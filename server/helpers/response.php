<?php
// filepath: server/helpers/response.php
// PURPOSE: Standardizes all API JSON responses
// Used by: All API files

function sendSuccess($message, $data = null, $statusCode = 200) {
    http_response_code($statusCode);
    $response = [
        "success" => true,
        "message" => $message
    ];
    if ($data !== null) {
        $response["data"] = $data;
    }
    echo json_encode($response);
    exit();
}

function sendError($message, $statusCode = 400) {
    http_response_code($statusCode);
    echo json_encode([
        "success" => false,
        "message" => $message
    ]);
    exit();
}