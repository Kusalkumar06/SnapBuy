import {WishListModel} from "../models/wishListModel.js"

export const getWishList = async (req,res) => {
  const userId = req.user.userId;

  try{
    const wishLIst = await WishListModel.findOne({user: userId}).populate('items.product')

    if (!wishLIst){
      return res.status(404).json({
        message: 'Wishlist not found.'
      })
    }
    res.status(200).json({
      message: 'Wishlist fetched successfully.',
      wishlist: wishLIst
    })
  } catch(err) {
    res.status(500).json({
      message: 'Error during fetching wishlist.',
      error: err
    })
  }
}

export const addToWishList = async (req,res) => {
  const userId = req.user.userId;
  const { productId } = req.body;

  try{
    let wishList = await WishListModel.findOne({user: userId});

    if (!wishList){
      wishList = new WishListModel({user: userId, items: []});
    }

    const alreadyExists = wishList.items.some(
      (item) => item.product.toString() === productId
    );

    if (alreadyExists) {
      return res.status(400).json({ message: 'Already in wishlist',wishlist: wishList});
    }

    wishList.items.push({product: productId});
    await wishList.save();

    const populatedWishList = await wishList.populate('items.product');

    res.status(200).json({
      message: 'Product added to wishlist.',
      wishlist: populatedWishList
    })
  } catch(err){
    console.log(err)
    res.status(500).json({
      message: 'Error during adding to the wishlist.',
      error: err
    })
  }
}

export const removeFromWishList = async (req,res) => {
  const userId = req.user.userId;
  const { productId } = req.params;

  try{
    const wishList = await WishListModel.findOne({user: userId});

    if(!wishList){
      return res.status(404).json({
        message: 'Wishlist not found.'
      })
    }

    wishList.items = wishList.items.filter(
      (item) => item.product.toString() !== productId
    );

    await wishList.save();

    const populatedWishList = await wishList.populate('items.product');

    res.status(200).json({
      message: 'Product removed from wishlist.',
      wishlist: populatedWishList
    })
  } catch(err){
    console.log(err)
    res.status(500).json({
      message: 'Error during removing from wishlist.',
      error: err
    })
  }
}