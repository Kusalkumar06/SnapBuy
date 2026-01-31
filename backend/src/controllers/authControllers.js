import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";
import "dotenv/config";
import { CartModel } from "../models/cartModel.js";
import { UserModel } from "../models/userModel.js";
import { WishListModel } from "../models/wishListModel.js";

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existing_user = await UserModel.findOne({ username });
    if (existing_user) {
      return res.status(400).json({
        message: "User already exists. Try using another name.",
        error: true,
      });
    }

    const verificationToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex");

    const hashed_pass = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      username,
      email,
      password: hashed_pass,
      emailVerificationToken: hashedToken,
      emailVerificationExpire: Date.now() + 5 * 60 * 1000, // 5 minutes
    });

    await CartModel.create({ user: newUser._id, items: [] });
    await WishListModel.create({ user: newUser._id, items: [] });

    const verificationUrl = `${process.env.FRONTEND_URL}/verify-email/${verificationToken}`;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: newUser.email,
      subject: "SnapBuy Email Verification",
      text: `Please verify your email by clicking the following link: \n\n ${verificationUrl} \n\n This link expires in 5 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message:
        "User created successfully. Please check your email to verify your account.",
      user: newUser,
      error: false,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: `Something went wrong during registration. Error: ${err}`,
    });
  }
};

export const verifyEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const userWithToken = await UserModel.findOne({
      emailVerificationToken: hashedToken,
    });

    const user = await UserModel.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or expired verification token." });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpire = undefined;

    await user.save();

    res
      .status(200)
      .json({ message: "Email verified successfully. You can now login." });
  } catch (error) {
    console.error("Verification Error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong during verification." });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const existing_user = await UserModel.findOne({ email });
  try {
    if (!existing_user) {
      return res.status(400).json({
        message: "User is not registered yet.",
      });
    } else {
      const validPassword = await bcrypt.compare(
        password,
        existing_user.password,
      );
      if (!validPassword) {
        return res.status(400).json({
          message: "Invalid Credentials.",
        });
      } else {
        const secret_code = process.env.SECRET_CODE;
        const payload = {
          id: existing_user._id,
          username: existing_user.username,
          email: existing_user.email,
        };
        const jwtToken = jwt.sign(payload, secret_code, { expiresIn: "7d" });

        res.status(200).json({
          message: "Login Successful.",
          token: jwtToken,
          user: payload,
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      error: `Something went wrong during Authentication. Error: ${err}`,
    });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    // Assuming we don't want to reveal if user exists, we still send success.
    // However, if user exists, we proceed with email sending.
    if (!user) {
      return res.status(200).json({
        message:
          "If an account with that email exists, a reset link has been sent.",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    // Hash token before saving to database
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 minutes

    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: user.email,
      subject: "SnapBuy Password Reset",
      text: `You requested a password reset. Please go to this link to reset your password: \n\n ${resetUrl} \n\n This link expires in 15 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message:
        "If an account with that email exists, a reset link has been sent.",
    });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await UserModel.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res
      .status(200)
      .json({ message: "Password reset successful. You can now login." });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
