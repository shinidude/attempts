const User = require('../models/user');

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
        const user = await User.create({
            name, email, password
        })
        console.log(user)

        return res.json(user)
        
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    test,
    registerUser
}