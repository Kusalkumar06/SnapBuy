import { Router } from "express";
import { insertProducts, getProducts , addReview} from "../controllers/productControllers.js";
import {authenticate} from "../middleware/authMiddleware.js";

const productRouter = Router()

productRouter.get("/getProducts/",getProducts)

productRouter.post("/insertProducts/",insertProducts)

productRouter.post("/:id/addReview/",authenticate,addReview)



export default productRouter
