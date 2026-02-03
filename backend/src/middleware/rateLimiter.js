import rateLimit from "express-rate-limit";

export const passwordResetLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 2, // Limit each email to 2 requests per windowMs
  message: {
    message:
      "Too many password reset requests for this email, please try again after 24 hours.",
    error: true,
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req) => {
    return req.body.email || "unknown_email"; // Fallback to static string if email is not provided to avoid IP validation issues
  },
});
