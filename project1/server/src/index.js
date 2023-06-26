//For creating the api,  serving the front e-nd
import express from 'express';
//Allows to set up the rule between the client and server
import cors from 'cors'; 
//For the database mananagement system
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';

const app = express(); 

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipe", recipesRouter);

mongoose.connect("mongodb+srv://sheandanes1978:eZXsxkpvuegKM5Jj@recipes.lwwdgvv.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3001, ()=> console.log("server started"));