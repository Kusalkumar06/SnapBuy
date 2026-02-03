import { Router } from "express";
import { getProductById, getProducts , addReview} from "../controllers/productControllers.js";
import {authenticate} from "../middleware/authMiddleware.js";

const productRouter = Router()

productRouter.get("/getProducts/",getProducts)

productRouter.post("/getProductById/:id",getProductById)

productRouter.post("/:id/addReview/",authenticate,addReview)



export default productRouter
