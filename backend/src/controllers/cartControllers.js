import { CartModel } from "../models/cartModel.js";
import { ProductModel } from "../models/ProductModel.js";


export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await CartModel.findOne({ user: userId })
      .populate("items.product", "title price image category");

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found for this user",
        cart: { items: [], totalPrice: 0 },
      });
    }

    cart.totalPrice = await calculateCartTotal(cart.items);
    await cart.save();
  
    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching cart",
    });
  }
};


const calculateCartTotal = async (items) => {
  const productIds = items.map(i => i.product);
  const products = await ProductModel.find({ _id: { $in: productIds } });
  let total = 0;
  for (const item of items) {
    const product = products.find(p => p._id.toString() === item.product.toString());
    if (product) total += product.price * item.quantity;
  }
  return total;
};

export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    let cart = await CartModel.findOne({ user: userId });
    if (!cart) cart = new CartModel({ user: userId, items: [] });

    const existingItem = cart.items.find(item => item.product.toString() === productId);

    if (existingItem) existingItem.quantity += 1;
    else cart.items.push({ product: productId, quantity: 1 });

    cart.totalPrice = await calculateCartTotal(cart.items);
    await cart.save();

    const updatedCart = await CartModel.findOne({ user: userId }).populate("items.product");
    res.status(200).json({
      success: true,
      cart: updatedCart,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const decreaseCartItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    let cart = await CartModel.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(i => i.product.toString() === productId);
    if (!item) return res.status(404).json({ message: "Product not in cart" });

    if (item.quantity > 1) item.quantity -= 1;
    else item.quantity = 0;

    cart.items = cart.items.filter(i => i.quantity > 0);

    cart.totalPrice = await calculateCartTotal(cart.items);
    await cart.save();

    const updatedCart = await CartModel.findOne({ user: userId }).populate("items.product");
    res.status(200).json({
      success: true,
      cart: updatedCart 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const clearCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found for this user",
      });
    }

    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
      cart,
    });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({
      success: false,
      message: "Server error while clearing cart",
    });
  }
};
