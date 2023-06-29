const express = require('express'); 
const dotenv = require('dotenv').config(); 
const  cors = require('cors'); 
const {mongoose} = require('mongoose'); 

const app =  express(); 

//Database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Database is connected"))
.catch((err)=>console.log('Database is not connected', err) )

//The middleware
app.use(express.json()); 

app.use('/', require('./routes/authRoutes'))
//Setting up a port to listen to 
const port = 8000; 
app.listen(port, ()=> console.log(`Server is running on port ${port}`)); 