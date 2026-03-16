import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
  webhookHandler,
} from "../controllers/paymentController.js";

const paymentRouter = express.Router();

paymentRouter.post("/webhook", webhookHandler);

// Protected Routes
paymentRouter.use(authenticate);

paymentRouter.post("/create", createRazorpayOrder);
paymentRouter.post("/verify", verifyRazorpayPayment);

export default paymentRouter;
