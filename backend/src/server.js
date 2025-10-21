import express from "express"
import { connectDB } from "./config/db.js"
import "dotenv/config"

const app = express()
app.use(express.json())

const port = process.env.PORT || 5000
const url = process.env.MONGO_URI

if (!URL){
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