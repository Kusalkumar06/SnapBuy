import { CartModel } from "../models/cartModel.js";
import { ProductModel } from "../models/productsmodel.js";

const calculateCartTotal = (items) => {
  return items.reduce((total, item) => {
    if (item.product && item.product.price) {
      total += item.product.price * item.quantity;
    }
    return total;
  }, 0);
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user.userId;

    const cart = await CartModel.findOne({ user: userId }).populate(
      "items.product",
      "title price image category description",
    );

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found for this user",
        cart: { items: [], totalPrice: 0 },
      });
    }

    const totalPrice = calculateCartTotal(cart.items);

    res.status(200).json({
      success: true,
      cart: {
        items: cart.items,
        totalPrice,
      },
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching cart",
    });
  }
};

export const addToCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.body;

    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ product: productId, quantity: 1 });
    }

    await cart.save();

    const updatedCart = await CartModel.findOne({ user: userId }).populate(
      "items.product",
      "title price image category description",
    );

    const totalPrice = calculateCartTotal(updatedCart.items);

    res.status(200).json({
      success: true,
      cart: {
        items: updatedCart.items,
        totalPrice,
      },
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const decreaseCartItem = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.body;

    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find((i) => i.product.toString() === productId);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Product not in cart",
      });
    }

    item.quantity -= 1;

    cart.items = cart.items.filter((i) => i.quantity > 0);

    await cart.save();

    const updatedCart = await CartModel.findOne({ user: userId }).populate(
      "items.product",
      "title price image category description",
    );

    const totalPrice = calculateCartTotal(updatedCart.items);

    res.status(200).json({
      success: true,
      cart: {
        items: updatedCart.items,
        totalPrice,
      },
    });
  } catch (error) {
    console.error("Error decreasing cart item:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.body;
    

    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const initialLength = cart.items.length;
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId,
    );

    if (cart.items.length === initialLength) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart",
      });
    }

    await cart.save();

    const updatedCart = await CartModel.findOne({ user: userId }).populate(
      "items.product",
      "title price image category description",
    );

    const totalPrice = calculateCartTotal(updatedCart.items);

    res.status(200).json({
      success: true,
      message: "Item removed from cart",
      cart: {
        items: updatedCart.items,
        totalPrice,
      },
    });
  } catch (error) {
    console.error("Error removing cart item:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const clearCart = async (req, res) => {
  try {
    const userId = req.user.userId;

    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found for this user",
      });
    }

    cart.items = [];
    await cart.save();

    res.status(200).json({
      success: true,
      cart: {
        items: [],
        totalPrice: 0,
      },
    });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({
      success: false,
      message: "Server error while clearing cart",
    });
  }
};
