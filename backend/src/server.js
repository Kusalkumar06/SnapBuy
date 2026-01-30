import express from "express"
import { connectDB } from "./config/db.js"
import "dotenv/config"
import cors from "cors"
import authRouter from "./routes/authRoutes.js"
import productRouter from "./routes/productRoutes.js"
import cartRouter from "./routes/cartRoues.js"
import wishListRouter from "./routes/wishListRoutes.js"


const app = express()

app.use(cors())

app.use(express.json())

const port = process.env.PORT || 5000
const url = process.env.MONGO_URI

if (!url){
    console.error("MONGO_URI is not defined in the .env file.")
    process.exit(1)
}

const main = async() => {
  try{
    await connectDB(url);
    app.listen(port,() => {
      console.log(`Server is running in the http://localhost:${port}`)
    })
  }catch (err){
    console.error("Error Connecting to the Database: ",err)
    process.exit(1)
  }
}

main()

app.use('/auth/', authRouter)

app.use('/product/', productRouter)

app.use('/cart/', cartRouter)

app.use('/wishlist', wishListRouter)