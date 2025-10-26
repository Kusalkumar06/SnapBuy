import {getWishList,addToWishList,removeFromWishList} from "../controllers/wishListControllers.js"
import {Router} from "express"
import {authenticate} from "../middleware/authMiddleware.js"

const wishListRouter = Router()

wishListRouter.get("/getWishList",authenticate,getWishList)

wishListRouter.post("/addToWishList/",authenticate,addToWishList)

wishListRouter.delete('/removeFromWishList/:productId',authenticate,removeFromWishList)

export default wishListRouter