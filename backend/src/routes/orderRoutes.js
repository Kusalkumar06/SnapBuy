import express from "express";
import {
  createOrder,
  getMyOrders,
  getOrderById,
} from "../controllers/orderController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const orderRouter = express.Router();

// Protected Routes
orderRouter.use(authenticate);

orderRouter.post("/", createOrder);
orderRouter.get("/my", getMyOrders);
orderRouter.get("/:id", getOrderById);

export default orderRouter;