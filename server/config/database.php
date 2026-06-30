<?php
// filepath: server/config/database.php
// PURPOSE: Creates and returns a MySQL database connection
// Used by: All API files (register.php, login.php, etc.)

// define('DB_HOST', 'mysql.manavaikhanasam.com'); // DreamHost MySQL host
// define('DB_USER', 'duhtuzgn');                // Your DreamHost DB username
// define('DB_PASS', 'edbsRzqKPxGn');          // Your DreamHost DB password
// define('DB_NAME', 'manavaikhanasam_com_db');           // Your database name

define('DB_HOST', 'localhost'); // DreamHost MySQL host
define('DB_USER', 'root');                // Your DreamHost DB username
define('DB_PASS', 'Password@123');          // Your DreamHost DB password
define('DB_NAME', 'manavaikhanasam_com_db');           // Your database name

function getDBConnection() {    
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Database connection failed"
        ]);
        exit();
    }

    $conn->set_charset("utf8mb4");
    return $conn;
}