<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';

header('Content-Type: application/json');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false, 'message' => 'Method not allowed.']);
}

try {
    $body = json_decode(file_get_contents('php://input'), true) ?: [];
    $action = (string)($body['action'] ?? '');
    $email = strtolower(trim((string)($body['email'] ?? '')));
    $database = db();

    if ($action === 'login') {
        $statement = $database->prepare('SELECT email, password_hash FROM users WHERE email = ? LIMIT 1');
        $statement->execute([$email]);
        $account = $statement->fetch();
        if (!$account) respond(404, ['success' => false, 'message' => 'Account not found.']);
        if (!password_verify((string)($body['password'] ?? ''), $account['password_hash'])) {
            respond(401, ['success' => false, 'message' => 'Invalid password.']);
        }
        respond(200, [
            'success' => true,
            'message' => 'Login successful. Admin access enabled.',
            'token' => 'php-admin-token',
            'name' => $account['email']
        ]);
    }

    if ($action === 'create-account') {
        $name = trim((string)($body['name'] ?? ''));
        $password = (string)($body['password'] ?? '');
        if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 8) {
            respond(400, ['success' => false, 'message' => 'Provide a name, valid email, and password with at least 8 characters.']);
        }
        $statement = $database->prepare('SELECT 1 FROM users WHERE email = ? LIMIT 1');
        $statement->execute([$email]);
        if ($statement->fetchColumn()) respond(409, ['success' => false, 'message' => 'That account already exists.']);

        $statement = $database->prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
        $statement->execute([$email, password_hash($password, PASSWORD_DEFAULT)]);
        respond(201, ['success' => true, 'message' => 'Account created. You can now log in.']);
    }

    if ($action === 'check-account') {
        $statement = $database->prepare('SELECT 1 FROM users WHERE email = ? LIMIT 1');
        $statement->execute([$email]);
        if (!$statement->fetchColumn()) respond(404, ['success' => false, 'message' => 'Account not found.']);
        respond(200, ['success' => true, 'message' => 'Account found. You can now set a new password.']);
    }

    if ($action === 'reset-password') {
        $password = (string)($body['password'] ?? '');
        if (strlen($password) < 8) respond(400, ['success' => false, 'message' => 'Password must be at least 8 characters.']);
        $statement = $database->prepare('UPDATE users SET password_hash = ? WHERE email = ?');
        $statement->execute([password_hash($password, PASSWORD_DEFAULT), $email]);
        if ($statement->rowCount() === 0) respond(404, ['success' => false, 'message' => 'Account not found.']);
        respond(200, ['success' => true, 'message' => 'Password changed successfully. You can now log in.']);
    }

    respond(400, ['success' => false, 'message' => 'Unsupported action.']);
} catch (Throwable $error) {
    respond(500, ['success' => false, 'message' => $error->getMessage() ?: 'Server error while processing the request.']);
}