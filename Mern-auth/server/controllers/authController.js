const User = require('../models/user');
const bcrypt = require('bcrypt');

const test = (req, res) =>{
    res.json('test is working');
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const registerUser= async (req, res)=>{
    try {
        //Take a request body 
        const {name, email, password} = req.body;
        //check if name was entered 
        if(!name){
            return res.json({
                error: 'name is required'
            })
        };
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is required and should be six chratacters long'
            })
        };
        //Check email 
        const doesExist =  await User.findOne({email});
        if(doesExist){
            return res.json({
                error : 'Email has been taken'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
        const user = await User.create({
            name,
            email, 
            password : hashedPassword
        })
        console.log(user.email)

        return res.json(user)
        
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req, res)=>{
    try {
        const {email,password} = req.body; 
       
        //check if the user exist
        const user = await User.findOne({email}); 
        if(!user){
            return res.json({
                error : 'No user found'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
            return res.json("Password is matched");
        }else{
            return res.json({
                error : 'password incorrect'
            });
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    test,
    registerUser, 
    loginUser
}