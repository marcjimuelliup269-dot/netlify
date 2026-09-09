<?php
declare(strict_types=1);

session_start();

if (!empty($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim((string)($_POST['email'] ?? ''));
    $password = (string)($_POST['password'] ?? '');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') {
        $error = 'Enter a valid email and password.';
    } else {
        try {
            require __DIR__ . '/db.php';
            $statement = db()->prepare('SELECT id, email, password_hash FROM users WHERE email = ? LIMIT 1');
            $statement->execute([$email]);
            $user = $statement->fetch();

            if ($user && password_verify($password, $user['password_hash'])) {
                session_regenerate_id(true);
                $_SESSION['user_id'] = (int)$user['id'];
                $_SESSION['user_email'] = $user['email'];
                header('Location: index.php');
                exit;
            }

            $error = 'Incorrect email or password.';
        } catch (Throwable $exception) {
            $error = 'Database is not ready. Import database.sql in phpMyAdmin first.';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In | Attendance Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root { --ink:#14213d; --muted:#66718a; --blue:#2859d9; --line:#e7ebf2; }
    * { box-sizing:border-box; }
    body { min-height:100vh; margin:0; display:grid; place-items:center; padding:24px; font-family:Inter,sans-serif; color:var(--ink); background:linear-gradient(135deg,#eaf1ff,#f7f9fc); }
    .login-card { width:min(100%,420px); padding:36px; background:#fff; border:1px solid var(--line); border-radius:24px; box-shadow:0 24px 60px rgba(29,44,91,.12); }
    .eyebrow { margin:0 0 10px; color:var(--blue); font-size:.75rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
    h1 { margin:0 0 8px; font-size:2rem; } .intro { margin:0 0 28px; color:var(--muted); }
    form { display:grid; gap:16px; } label { display:grid; gap:8px; color:var(--muted); font-size:.85rem; font-weight:600; }
    input { width:100%; padding:13px 14px; border:1px solid var(--line); border-radius:12px; font:inherit; color:var(--ink); }
    input:focus { outline:0; border-color:var(--blue); box-shadow:0 0 0 4px rgba(40,89,217,.1); }
    button { padding:13px 16px; border:0; border-radius:12px; background:var(--blue); color:#fff; font:inherit; font-weight:700; cursor:pointer; }
    .error { margin:0 0 16px; padding:12px; border-radius:10px; background:#fff0f0; color:#bd3e45; font-size:.85rem; }
  </style>
</head>
<body>
  <main class="login-card">
    <p class="eyebrow">College Attendance</p>
    <h1>Welcome back</h1>
    <p class="intro">Sign in to open the attendance dashboard.</p>
    <?php if ($error !== ''): ?><p class="error" role="alert"><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></p><?php endif; ?>
    <form method="post" autocomplete="on">
      <label>Email<input type="email" name="email" autocomplete="username" required></label>
      <label>Password<input type="password" name="password" autocomplete="current-password" required></label>
      <button type="submit">Sign In</button>
    </form>
  </main>
</body>
</html>
