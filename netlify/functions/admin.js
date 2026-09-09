const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const validEmail = "admin@tacliganhighschool.edu";
const resetCodes = new Map();
const accountsFile = path.join(process.cwd(), ".netlify", "admin-accounts.json");

function loadAccounts() {
  try {
    const savedAccounts = JSON.parse(fs.readFileSync(accountsFile, "utf8"));
    return new Map(Object.entries(savedAccounts));
  } catch (error) {
    return new Map([[validEmail, { name: "Tacligan Administrator", password: "admin123" }]]);
  }
}

function saveAccounts(accounts) {
  fs.mkdirSync(path.dirname(accountsFile), { recursive: true });
  fs.writeFileSync(accountsFile, JSON.stringify(Object.fromEntries(accounts), null, 2));
}

function response(statusCode, payload) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  };
}

async function sendVerificationCode(email, code) {
  const apiKey = process.env.RESEND_API_KEY;
  const adminGmail = process.env.ADMIN_GMAIL;
  const sender = process.env.RESEND_FROM_EMAIL || "Tacligan Attendance <onboarding@resend.dev>";

  if (!apiKey || !adminGmail) {
    throw new Error("Email delivery is not configured. Set RESEND_API_KEY and ADMIN_GMAIL in Netlify.");
  }

  const mailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: sender,
      to: [adminGmail],
      subject: "Tacligan High School password verification code",
      text: `A password change was requested for ${email}. Your verification code is ${code}. It expires in 10 minutes.`
    })
  });

  if (!mailResponse.ok) throw new Error("The verification email could not be sent.");
}

exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") return response(405, { success: false, message: "Method not allowed." });

  try {
    const body = JSON.parse(event.body || "{}");
    const action = body.action;
    const email = String(body.email || "").trim().toLowerCase();
    const accounts = loadAccounts();

    if (action === "login") {
      const account = accounts.get(email);
      if (account && account.password === body.password) {
        return response(200, {
          success: true,
          message: "Login successful. Admin access enabled.",
          token: "tacligan-admin-token",
          name: account.name
        });
      }
      return response(401, { success: false, message: "Invalid email or password." });
    }

    if (action === "check-account") {
      if (!accounts.has(email)) return response(404, { success: false, message: "No account was found for that email." });
      return response(200, { success: true, message: "Account found. You can now set a new password." });
    }

    if (action === "create-account") {
      const name = String(body.name || "").trim();
      const password = String(body.password || "");
      if (!name || !email || password.length < 8) {
        return response(400, { success: false, message: "Provide a name, valid email, and password with at least 8 characters." });
      }
      if (accounts.has(email)) return response(409, { success: false, message: "That account already exists." });
      accounts.set(email, { name, password });
      saveAccounts(accounts);
      return response(201, { success: true, message: "Account created. You can now log in." });
    }

    if (action === "request-reset") {
      if (!accounts.has(email)) return response(404, { success: false, message: "No account was found for that email." });
      const code = String(crypto.randomInt(100000, 1000000));
      resetCodes.set(email, { code, expiresAt: Date.now() + 10 * 60 * 1000 });
      await sendVerificationCode(email, code);
      return response(200, { success: true, message: "A verification code was sent to the admin Gmail address." });
    }

    if (action === "reset-password") {
      const password = String(body.password || "");
      if (password.length < 8) return response(400, { success: false, message: "Password must be at least 8 characters." });
      if (!accounts.has(email)) return response(404, { success: false, message: "No account was found for that email." });
      accounts.get(email).password = password;
      saveAccounts(accounts);
      return response(200, { success: true, message: "Password changed successfully. You can now log in." });
    }

    return response(400, { success: false, message: "Unsupported action." });
  } catch (error) {
    return response(500, { success: false, message: error.message || "Server error while processing the request." });
  }
};
