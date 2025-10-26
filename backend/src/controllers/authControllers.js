import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { CartModel }  from "../models/cartModel.js"
import { UserModel } from "../models/userModel.js"
import {WishListModel} from "../models/wishListModel.js"



export const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existing_user = await UserModel.findOne({ username });
    if (existing_user) {
      return res.status(400).json({
        message: "User already exists. Try using another name.",
        error: true,
      });
    }

    const hashed_pass = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      username,
      email,
      password: hashed_pass,
    });

    await CartModel.create({ user: newUser._id, items: [] });

    await WishListModel.create({ user: newUser._id, items: [] });

    res.status(201).json({
      message: "User created successfully.",
      user: newUser,
      error: false,
    });
  } catch (err) {
    res.status(500).json({
      error: `Something went wrong during registration. Error: ${err}`,
    });
  }
};



export const login = async (req,res) => {
	const {email,password} = req.body
	const exsisting_user = await UserModel.findOne({email});
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
							username: exsisting_user.username,
							email:exsisting_user.email,
						}
						const jwtToken = jwt.sign(payload,secret_code, {expiresIn : "7d"})

						res.status(200).json({
							message: "Login Successful.",
							token: jwtToken,
							user: payload,
						}); 
					}
				}	
    } catch (err){
        res.status(500).json({
					error: `Something went wrong during Authentication. Error: ${err}`
        })
    	}
}