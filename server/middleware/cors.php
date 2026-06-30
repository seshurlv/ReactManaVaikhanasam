<?php
// filepath: server/middleware/cors.php
// PURPOSE: Tells the browser it's safe to allow React frontend to call PHP APIs
// Used by: Every API file - must be included at the TOP before any output

function setCORSHeaders() {
    $allowed_origins = [
        "http://localhost:3000",
        "https://www.manavaikhanasam.com",
        "https://manavaikhanasam.com"
    ];

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
    }

    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json; charset=UTF-8");

    // Handle preflight OPTIONS request (browser sends this before actual request)
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
}