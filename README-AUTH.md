# Login Setup

## XAMPP

1. Start Apache and MySQL from XAMPP.
2. Open http://localhost/phpmyadmin.
3. Select **Import** and import `database.sql` from this project.
4. Open http://localhost/netlify/.

Accounts are stored in MySQL, so an account created from another device can log in through the same server address. Other devices must use the host computer's LAN IP instead of `localhost`.

## Netlify

The Netlify Function stores accounts in Netlify Blobs, which is shared across devices and serverless instances. Netlify automatically provides the Blobs connection for a deployed site. Run `netlify dev` for local Function testing.

The PHP endpoint stores passwords in MySQL as one-way hashes. The Netlify Function uses its shared account store. Login displays `Account not found` when the email is not registered and `Invalid password` only when the account exists.

The default local database settings are:

- Host: `127.0.0.1`
- Database: `attendance_dashboard`
- User: `root`
- Password: empty

Change those values through `DB_HOST`, `DB_NAME`, `DB_USER`, and `DB_PASS` environment variables when deploying to a different environment.
