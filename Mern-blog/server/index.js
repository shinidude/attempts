const express =  require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv').config(); 
const User = require('./models/User');

const app =  express(); 

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.DB)
.then(()=> console.log("Database is connected"))
.catch((err)=>console.log('Database is not connected', err) )

app.post('/register', async (req, res)=>{
    const {username, password} = req.body;
    const userInfo =  await User.create({username,password}); 
    res.json(userInfo);
})



app.listen(4000, ()=> console.log("server started"));