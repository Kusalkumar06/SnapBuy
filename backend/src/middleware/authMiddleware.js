import jwt from "jsonwebtoken"
import "dotenv/config"
import { UserModel } from "../models/userModel.js"

export const authenticate = async (req,res,next) => {
  const token = req.headers.authorization.split(" ")[1];

  console.log(token)

  if (!token){
    return res.status(401).json({
      message: "Token not provided",
    })
  }
  try{
    const secretCode = process.env.SECRET_CODE
    if (!secretCode) {
      return res.status(500).json({
        message: "Server misconfiguration"
      })
    }
    const verified = jwt.verify(token,secretCode)
    console.log(verified)
    const userDetails = await UserModel.findOne({_id: verified.id})
    console.log(userDetails)
    if (!userDetails){
      return res.status(400).json({
        message: "user not found."
      })
    }
    
    req.user = {userId: userDetails._id.toString(), username: userDetails.username}
    next();
  } catch (err){
    res.status(401).json({
      message: "Invalid Token",
      error: err
    })
  }
}