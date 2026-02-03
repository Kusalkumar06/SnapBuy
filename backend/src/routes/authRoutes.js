import {
  register,
  login,
  forgotPassword,
  resetPassword,
  verifyEmail,
} from "../controllers/authControllers.js";
import { Router } from "express";
import { passwordResetLimiter } from "../middleware/rateLimiter.js";

const authRouter = Router();

authRouter.post("/login/", login);

authRouter.post("/register/", register);

authRouter.post("/forgot-password", passwordResetLimiter, forgotPassword);
authRouter.post("/reset-password/:token", resetPassword);
authRouter.post("/verify-email/:token", verifyEmail);

export default authRouter;
