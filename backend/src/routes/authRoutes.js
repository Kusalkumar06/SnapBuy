import {register,login} from "../controllers/authControllers.js"
import {Router} from "express"

const authRouter = Router()

authRouter.post("/login/",login)

authRouter.post("/register/",register)

export default authRouter