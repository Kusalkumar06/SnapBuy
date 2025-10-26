import mongoose from "mongoose"

const wishListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items:[
    {
      product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      }
    }
  ]
},{timeStamps: true})

export const WishListModel = mongoose.model('WishList',wishListSchema)