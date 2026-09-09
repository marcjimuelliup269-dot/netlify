# Netlify CMS Attendance Dashboard

A simple static attendance dashboard backed by Netlify CMS. The dashboard reads its data from `attendance.json`, and the admin UI lets you edit it in the browser.

## Local preview

From the project root, run:

```bash
python -m http.server 8000
```

Then open:

- http://localhost:8000
- http://localhost:8000/admin/

## Deployment on Netlify

1. Push this folder to your GitHub repository.
2. Import the repo in Netlify.
3. Set the publish directory to `.`.
4. In Netlify CMS, sign in using Git Gateway or your configured auth.
5. Edit the data in `attendance.json` from the CMS admin panel.

## Admin account recovery

The login page supports account creation, logout, and password recovery. Password recovery sends a time-limited verification code to the configured admin Gmail address through Resend.

Set these Netlify environment variables before using account recovery:

- `RESEND_API_KEY` — API key from Resend
- `ADMIN_GMAIL` — Gmail address that receives verification codes
- `RESEND_FROM_EMAIL` — optional verified sender, such as `Tacligan Attendance <noreply@your-domain.com>`

The default demo account is `admin@tacliganhighschool.edu` with password `admin123`. Local development stores created accounts in `.netlify/admin-accounts.json` so they remain available after restarting Netlify Dev. For durable production storage across serverless instances, connect the function to a database or Netlify Blobs.

## Files

- `index.html` — dashboard frontend
- `styles.css` — dashboard styling
- `app.js` — rendering logic
- `attendance.json` — editable dashboard data
- `admin/config.yml` — Netlify CMS configuration
- `admin/index.html` — CMS admin entry
