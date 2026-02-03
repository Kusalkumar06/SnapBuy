import jwt from "jsonwebtoken";
import "dotenv/config";
import { UserModel } from "../models/userModel.js";

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Token not provided",
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    const secretCode = process.env.SECRET_CODE;
    if (!secretCode) {
      return res.status(500).json({
        message: "Server misconfiguration",
      });
    }
    const verified = jwt.verify(token, secretCode);
    const userDetails = await UserModel.findOne({ _id: verified.id });

    if (!userDetails) {
      return res.status(400).json({
        message: "user not found.",
      });
    }

    req.user = {
      _id: userDetails._id,
      userId: userDetails._id,
      role: userDetails.role,
      username: userDetails.username,
    };

    next();
  } catch (err) {
    res.status(401).json({
      message: "Invalid Token",
      error: err,
    });
  }
};
