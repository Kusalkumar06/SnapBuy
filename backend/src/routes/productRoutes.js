import { Router } from "express";
import { insertProducts, getProducts} from "../controllers/productControllers.js";

const productRouter = Router()

productRouter.get("/getProducts/",getProducts)

productRouter.post("/insertProducts/",insertProducts)

export default productRouter
