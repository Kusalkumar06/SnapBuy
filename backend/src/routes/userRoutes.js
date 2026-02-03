import express from "express";
import {
  getMe,
  updateProfile,
  updatePassword,
  deleteAccount,
} from "../controllers/userControllers.js";
import { authenticate } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.use(authenticate);

userRouter.get("/me", getMe);
userRouter.put("/profile", updateProfile);
userRouter.put("/password", updatePassword);
userRouter.delete("/delete", deleteAccount);

export default userRouter;
