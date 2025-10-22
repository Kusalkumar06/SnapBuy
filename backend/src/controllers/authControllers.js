import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { CartModel }  from "../models/cartModel.js"
import { UserModel } from "../models/userModel.js"


export const register = async(req,res) => {
    const {username,password,email} = req.body;
    try{
        const exsisting_user = await UserModel.findOne({username})
        if (exsisting_user){
            return res.status(400).json({
                message: "User already exists. Try using another name.",
                error:true,
                user:exsisting_user
            })
        } else {
            const hashed_pass = await bcrypt.hash(password,10);
            const newUser = await UserModel.create({username,email,password:hashed_pass})

            await CartModel.create({ user: newUser._id, items: [] });

            res.status(201).json({
                message: "User created successfully.",
                result:newUser,
                error:false
            })
        }
    } catch (err){
        res.status(500).json({
            error : `Something went wrong during registration. Error: ${err}`
        })
    }
}


export const login = async (req,res) => {
    const {username,password} = req.body
    const exsisting_user = await UserModel.findOne({username});
    try{
        if (!exsisting_user){
            return res.status(400).json({
                message: "User is not registered yet.",
            })
        } else {
            const validPassword = await bcrypt.compare(password, exsisting_user.password);
            if (!validPassword){
                return res.status(400).json({
                    message: "Invalid Credentials."
                })
            } else {
                const secret_code = process.env.SECRET_CODE
                const payload = {
                    id: exsisting_user._id,
                    username,
                    email:exsisting_user.email,
                }
                const jwtToken = jwt.sign(payload,secret_code, {expiresIn : "1d"})

                res.cookie("authToken", jwtToken, {
                    httpOnly: true,   
                    secure: process.env.NODE_ENV === "production", 
                    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
                    maxAge: 7 * 24 * 60 * 60 * 1000,//[ 7 day]
                }).json({
                    message: "Login Successfull.",
                }) 
            }
        }
    } catch (err){
        res.status(500).json({
            error: `Something went wrong during Authentication. Error: ${err}`
        })
    }
}