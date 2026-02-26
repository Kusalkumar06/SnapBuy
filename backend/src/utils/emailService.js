import axios from "axios";
import "dotenv/config";

const brevoApiKey = process.env.BREVO_API_KEY;
const emailFrom = process.env.EMAIL_FROM;

if (!brevoApiKey) {
  console.warn("BREVO_API_KEY is missing in environment variables.");
}

if (!emailFrom) {
  console.warn("EMAIL_FROM is missing in environment variables.");
}

const getSenderString = () => {
  if (!emailFrom) return { email: "no-reply@example.com", name: "SnapBuy" };

  const match = emailFrom.match(/^(.*?)\s*<(.*)>$/);
  if (match) {
    return { name: match[1].trim(), email: match[2].trim() };
  }
  return { email: emailFrom.trim(), name: "SnapBuy" };
};

const sendEmail = async (to, subject, htmlContent) => {
  const sender = getSenderString();

  const data = {
    sender,
    to: [{ email: to }],
    subject,
    htmlContent,
  };

  try {
    await axios.post("https://api.brevo.com/v3/smtp/email", data, {
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    console.log(`Email sent to ${to} via Brevo`);
  } catch (error) {
    console.error(
      "Brevo Email Error:",
      error.response ? error.response.data : error.message,
    );
    // Non-blocking: do not throw error
  }
};

export const sendVerificationEmail = async (email, link) => {
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Welcome to SnapBuy!</h2>
      <p>Please verify your email address by clicking the link below:</p>
      <a href="${link}" style="display: inline-block; background-color: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
      <p>Or copy this link: <br> ${link}</p>
      <p>This link expires in 24 hours.</p>
    </div>
  `;
  await sendEmail(email, "Verify your SnapBuy Email", html);
};

export const sendPasswordResetEmail = async (email, link) => {
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Password Reset Request</h2>
      <p>You requested to reset your password. Click the link below to proceed:</p>
      <a href="${link}" style="display: inline-block; background-color: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
      <p>Or copy this link: <br> ${link}</p>
      <p>This link expires in 15 minutes.</p>
      <p>If you did not request this, please ignore this email.</p>
    </div>
  `;
  await sendEmail(email, "SnapBuy Password Reset", html);
};