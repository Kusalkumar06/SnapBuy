import express from "express";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import wishListRouter from "./routes/wishListRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import userRouter from "./routes/userRoutes.js";
const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;
const url = process.env.MONGO_URI;

if (!url) {
  console.error("MONGO_URI is not defined in the .env file.");
  process.exit(1);
}

const main = async () => {
  try {
    await connectDB(url);
    app.listen(port, () => {
      console.log(`Server is running in the http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error Connecting to the Database: ", err);
    process.exit(1);
  }
};

main();

app.use("/auth/", authRouter);

app.use("/product/", productRouter);

app.use("/cart/", cartRouter);

app.use("/wishlist", wishListRouter);

app.use("/user", userRouter);

app.use("/orders", orderRouter);
