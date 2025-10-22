import {ProductModel} from "../models/ProductModel.js"

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching products",
    });
  }
};


export const addReview = async (req, res) => {
  try {
    const { productId } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user.id;
    const username = req.user.username;

    const product = await ProductModel.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.reviews.push({ user: userId, username, rating, comment });

    await product.save();

    res.status(200).json({
      success: true,
      message: "Review added successfully",
      product,
    });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({
      success: false,
      message: "Server error while adding review",
    });
  }
};
