import Razorpay from "razorpay";
import crypto from "crypto";
import { OrderModel } from "../models/orderModel.js";
import { CartModel } from "../models/cartModel.js";

// Initialize Razorpay Instance
const createRazorpayInstance = () => {
  return new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY_ID,
    key_secret: process.env.RAZOR_PAY_KEY_SECRET,
  });
};

export const createRazorpayOrder = async (req, res) => {
  try {
    const { orderId } = req.body;
    const userId = req.user.userId;

    // Find the order
    const order = await OrderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (order.paymentMethod !== "Razorpay") {
      return res.status(400).json({ message: "Order payment method is not Razorpay" });
    }

    if (order.paymentStatus === "paid" || order.paymentStatus === "verifying") {
      return res.status(400).json({ message: "Order is already paid or being verified" });
    }

    const rzp = createRazorpayInstance();

    const options = {
      amount: order.totalAmountPaise, // amount in the smallest currency unit
      currency: "INR",
      receipt: order._id.toString(),
    };

    const rzpOrder = await rzp.orders.create(options);

    // Save the razorpay order id to our DB document
    order.razorpayOrderId = rzpOrder.id;
    await order.save();

    res.status(200).json({
      success: true,
      rzpOrderId: rzpOrder.id,
      amount: order.totalAmountPaise,
      currency: "INR",
    });
  } catch (error) {
    console.error("Razorpay Order Creation Error:", error);
    res.status(500).json({ message: "Server error while initiating payment" });
  }
};

export const verifyRazorpayPayment = async (req, res) => {
  try {
    const { orderId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
    const userId = req.user.userId;

    const order = await OrderModel.findById(orderId);
    if (!order || order.user.toString() !== userId.toString()) {
      return res.status(404).json({ message: "Order not found or not authorized" });
    }

    if (order.paymentStatus === "paid") {
      // Cart already cleared by webhook if it beat us
      return res.status(200).json({ success: true, message: "Already paid", order });
    }

    const secret = process.env.RAZOR_PAY_KEY_SECRET;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest("hex");

    if (generatedSignature !== razorpaySignature) {
      return res.status(400).json({ message: "Invalid payment signature" });
    }

    // Verify amount with Razorpay API directly (Optional but highly recommended)
    const rzp = createRazorpayInstance();
    const payment = await rzp.payments.fetch(razorpayPaymentId);

    if (payment.amount !== order.totalAmountPaise) {
       return res.status(400).json({ message: "Payment amount mismatched with order amount" });
    }

    // Payment matches securely
    order.paymentStatus = "verifying";
    order.orderStatus = "pending_payment";
    // order.paidAt left empty until Webhook finalizes it
    order.razorpayPaymentId = razorpayPaymentId;
    order.razorpaySignature = razorpaySignature;
    order.razorpayOrderId = razorpayOrderId;

    await order.save();

    // Securely clear cart since frontend UI verification passed, and make it idempotent!
    const cart = await CartModel.findOne({ user: userId });
    if (cart && cart.items.length > 0) {
      await CartModel.updateOne(
        { user: userId },
        { $set: { items: [], totalPaise: 0 } },
      );
    }

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      order,
    });
  } catch (error) {
    console.error("Razorpay Payment Verification Error:", error);
    res.status(500).json({ message: "Server error while verifying payment" });
  }
};


export const webhookHandler = async (req, res) => {
  try {
    const secret = process.env.RAZOR_PAY_WEBHOOK_SECRET || process.env.RAZOR_PAY_KEY_SECRET; // Fallback to key secret if dedicated webhook secret not set
    const signature = req.headers["x-razorpay-signature"];

    // Use req.rawBody provided by our custom express middleware
    if (!req.rawBody) {
      console.error("Webhook: rawBody not found. Cannot verify signature.");
      return res.status(400).json({ message: "rawBody not found" });
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(req.rawBody)
      .digest("hex");

    if (expectedSignature !== signature) {
      return res.status(400).json({ message: "Invalid webhook signature" });
    }

    const { event, payload } = req.body;

    if (event === "payment.captured") {
      const payment = payload.payment.entity;
      const razorpayOrderId = payment.order_id;

      const order = await OrderModel.findOne({ razorpayOrderId });
      
      // Idempotency pattern
      if (order && order.paymentStatus !== "paid") {
        // Amount verification pattern
        if (payment.amount === order.totalAmountPaise) {
          order.paymentStatus = "paid";
          order.orderStatus = "placed";
          order.paidAt = new Date();
          order.razorpayPaymentId = payment.id;
          await order.save();

          // Fallback cart clear logic (usually /verify handles this first, but webhook is the absolute truth)
          const cart = await CartModel.findOne({ user: order.user });
          if (cart && cart.items.length > 0) {
            await CartModel.updateOne(
              { user: order.user },
              { $set: { items: [], totalPaise: 0 } },
            );
          }
        } else {
           console.warn(`Webhook: Amount mismatch for order ${order._id}. Expected ${order.totalAmountPaise}, got ${payment.amount}`);
        }
      }
    } else if (event === "payment.failed") {
      const payment = payload.payment.entity;
      const razorpayOrderId = payment.order_id;

      const order = await OrderModel.findOne({ razorpayOrderId });
      if (order && order.paymentStatus !== "paid") {
        order.paymentStatus = "failed";
        order.orderStatus = "payment_failed";
        await order.save();
      }
    }

    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("Razorpay Webhook Error:", error);
    // Even if error occurs, responding 200 helps stop Razorpay retrying constantly for unresolvable issues.
    // If it's a transient db issue, keeping 500 allows Razorpay to retry.
    res.status(500).json({ message: "Server error while processing webhook" });
  }
};
