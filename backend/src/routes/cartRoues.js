import {
  getCart,
  addToCart,
  decreaseCartItem,
  clearCart,
  removeCartItem,
} from "../controllers/cartControllers.js";
import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware.js";

const cartRouter = Router();

cartRouter.get("/getCart", authenticate, getCart);

cartRouter.post("/add", authenticate, addToCart);

cartRouter.post("/decrease", authenticate, decreaseCartItem);

cartRouter.post("/clear", authenticate, clearCart);

cartRouter.post("/remove", authenticate, removeCartItem);

export default cartRouter;
