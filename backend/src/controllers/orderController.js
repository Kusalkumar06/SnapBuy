import { OrderModel } from "../models/orderModel.js";
import { CartModel } from "../models/cartModel.js";

export const createOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { shippingAddress, paymentMethod } = req.body;

    if (!shippingAddress) {
      return res.status(400).json({ message: "Shipping address is required" });
    }

    const cart = await CartModel.findOne({ user: userId }).populate(
      "items.product",
    );

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const orderItems = [];
    let totalPrice = 0;

    for (const item of cart.items) {
      if (!item.product) continue;

      const itemTotal = item.product.price * item.quantity;

      orderItems.push({
        product: item.product._id,
        title: item.product.title,
        image: item.product.image,
        price: item.product.price,
        quantity: item.quantity,
        totalPrice: itemTotal,
      });

      totalPrice += itemTotal;
    }

    if (orderItems.length === 0) {
      return res.status(400).json({ message: "No valid products in cart" });
    }

    const newOrder = new OrderModel({
      user: userId,
      orderItems,
      totalPrice,
      shippingAddress,
      paymentMethod: paymentMethod || "COD",
      paymentStatus: "pending",
      orderStatus: "placed",
    });

    const savedOrder = await newOrder.save();

    cart.items = [];
    cart.save();
    await CartModel.updateOne(
      { user: userId },
      { $set: { items: [], total: 0 } },
    );

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ message: "Server error while placing order" });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const userId = req.user.userId;

    const orders = await OrderModel.find({ user: userId })
      .sort({ createdAt: -1 })
      .select("_id totalPrice orderStatus paymentStatus createdAt");

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Get My Orders Error:", error);
    res.status(500).json({ message: "Server error while fetching orders" });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const userId = req.user.userId;

    const order = await OrderModel.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.user.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to view this order" });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Get Order By ID Error:", error);
    res
      .status(500)
      .json({ message: "Server error while fetching order details" });
  }
};
