import express from "express"; 
import jwt from "jsonwebtoken"; 
import bcrypt from "bcrypt";
import { UserModel } from "../model/Users.js";

const router = express.Router(); 

/**
 * req : getting data 
 * res : sending data to the user 
 */
router.post("/register", async(req, res)=>{
    const {username,  password} = req.body;
    //Finding a user where the user is equal to the username given by the user
    const user = await UserModel.findOne({username : username});

    if(user){
        return res.json({message: "User already exist"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({username , password: hashedPassword}); 
    await newUser.save(); 
    res.json({message: "User is saved successfully"});
    res.json(user);
 }); 

router.post("/login", async(req, res)=>{
    const {username,  password} = req.body;
    //Finding a user where the user is equal to the username given by the user
    const user = await UserModel.findOne({username : username});

    if(!user){
        return res.json({message: "User not found, please check your details."});
    }

    const isPasswordValid =  await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        res.json({message:"Password is incorrect, please check your details"});
    }

    const token = jwt.sign({id: user._id},  "secret");
    res.json({token, userID: user._id})

})

export {router as userRouter}; 