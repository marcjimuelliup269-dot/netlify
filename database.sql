CREATE DATABASE IF NOT EXISTS attendance_dashboard
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE attendance_dashboard;

CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO users (email, password_hash)
VALUES ('marcjimuelliup269@gmail.com', '$2y$10$KkbCqh2zoZNF2KtRv27pG.k.2wTeKKowQ/VzDd8jpJA60a3DxZ/Bu')
ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash);
