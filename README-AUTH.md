# Local Login Setup

1. Start Apache and MySQL from XAMPP.
2. Open http://localhost/phpmyadmin
3. Select **Import** and import `database.sql` from this project.
4. Open http://localhost/netlify/
5. Sign in with the account you provided.

The password is stored in MySQL as a one-way hash. The dashboard requires a PHP session, and direct requests to the raw `index.html` file are blocked by `.htaccess`.

The default local database settings are:

- Host: `127.0.0.1`
- Database: `attendance_dashboard`
- User: `root`
- Password: empty

Change those values through `DB_HOST`, `DB_NAME`, `DB_USER`, and `DB_PASS` environment variables when deploying to a different environment.
