<?php
// filepath: server/helpers/auth.php
// PURPOSE: Verifies admin token on every protected admin API request
// Used by: pending_users.php, approve.php, reject.php

require_once __DIR__ . '/../helpers/response.php';

function verifyAdminToken() {
    // Get Authorization header from React request
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? '';

    if (empty($authHeader) || !str_starts_with($authHeader, 'Bearer ')) {
        sendError("Unauthorized - No token provided", 401);
    }

    $token = substr($authHeader, 7);

    // Decode the base64 token
    $decoded = json_decode(base64_decode($token), true);

    if (!$decoded) {
        sendError("Unauthorized - Invalid token", 401);
    }

    // Check token expiry
    if ($decoded['exp'] < time()) {
        sendError("Unauthorized - Token expired", 401);
    }

    // Verify signature
    $expectedSig = hash_hmac(
        'sha256',
        $decoded['id'] . $decoded['username'],
        getenv('JWT_SECRET') ?: 'mv_secret_change_in_production'
    );

    if ($decoded['sig'] !== $expectedSig) {
        sendError("Unauthorized - Invalid token signature", 401);
    }

    return $decoded;
}

// PURPOSE: Verifies user token on every protected user API request
function verifyUserToken() {
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? '';

    if (empty($authHeader) || !str_starts_with($authHeader, 'Bearer ')) {
        sendError("Unauthorized - No token provided", 401);
    }

    $token = substr($authHeader, 7);
    $decoded = json_decode(base64_decode($token), true);

    if (!$decoded || ($decoded['role'] ?? '') !== 'user') {
        sendError("Unauthorized - Invalid token", 401);
    }

    if ($decoded['exp'] < time()) {
        sendError("Unauthorized - Token expired", 401);
    }

    $expectedSig = hash_hmac(
        'sha256',
        $decoded['id'] . $decoded['phone'],
        getenv('JWT_SECRET') ?: 'mv_secret_change_in_production'
    );

    if ($decoded['sig'] !== $expectedSig) {
        sendError("Unauthorized - Invalid token signature", 401);
    }

    return $decoded;
}