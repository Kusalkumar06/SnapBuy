import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    // PRICE PER UNIT — STORED IN PAISE
    pricePaise: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    // pricePaise * quantity
    totalPricePaise: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderItems: [orderItemSchema],

    // FINAL ORDER TOTAL — AUTHORITATIVE
    totalAmountPaise: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "Razorpay"],
      default: "COD",
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "verifying", "paid", "failed", "refunded"],
      default: "pending",
    },

    razorpayOrderId: {
      type: String,
    },
    razorpayPaymentId: {
      type: String,
    },
    razorpaySignature: {
      type: String,
    },

    taxPaise: {
      type: Number,
      default: 0,
    },

    shippingPaise: {
      type: Number,
      default: 0,
    },

    paidAt: {
      type: Date,
    },

    orderStatus: {
      type: String,
      enum: ["pending_payment", "payment_failed", "placed", "processing", "shipped", "delivered", "cancelled", "expired"],
      default: "pending_payment",
    },

    shippingAddress: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
    },
  },
  { timestamps: true },
);

export const OrderModel = mongoose.model("Order", orderSchema);
