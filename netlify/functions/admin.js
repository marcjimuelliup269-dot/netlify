exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: false,
        message: "Method not allowed."
      })
    };
  }

  try {
    const { action, email, password } = JSON.parse(event.body || "{}");

    if (action !== "login") {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          success: false,
          message: "Unsupported action."
        })
      };
    }

    const validEmail = "admin@northview.edu";
    const validPassword = "admin123";

    if (email === validEmail && password === validPassword) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          success: true,
          message: "Login successful. Admin access enabled.",
          token: "northview-admin-token"
        })
      };
    }

    return {
      statusCode: 401,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: false,
        message: "Invalid email or password."
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: false,
        message: "Server error while processing login."
      })
    };
  }
};
