/**
 * This file is for setting up the table for the users 
 */

import mongoose from "mongoose";

//How the table 
const UserSchema =  new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    password:{
        type: String, 
        required: true
    }
})

//Displays the table users in the database
export const UserModel = mongoose.model("users", UserSchema)