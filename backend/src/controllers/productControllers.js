import { ProductModel } from "../models/productsmodel";

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

export const insertProducts = async (req, res) => {
  const products = req.body;

  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ message: "Products array is required" });
  }

  try {
    const insertedProducts = await ProductModel.insertMany(products);
    res.status(201).json({
      message: `${insertedProducts.length} products inserted successfully`,
      result: insertedProducts,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error inserting products",
      error: err.message,
    });
  }
};



export const addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user.userId;
    const username = req.user.username;

    const product = await ProductModel.findById(id);
    if (!product) 
      return res.status(404).json({ 
        message: "Product not found" 
      });

    product.reviews.push({ user: userId, name: username, rating, comment });

    product.rating = product.reviews.reduce((acc, item) => acc + item.rating, 0) / product.reviews.length;

    product.numReviews = product.reviews.length;


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