const express =  require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv').config(); 
const User = require('./models/User');
const bcrypt = require('bcrypt');
const UserModel = require('./models/User');
const jwt = require("jsonwebtoken"); 
const cookieParser = require("cookie-parser"); 
const multer =  require('multer'); 
const uploadMiddleware =  multer({ dest: 'uploads/'})
const fs = require('fs') //find system
const Post = require('./models/Post'); 


const app =  express(); 
app.use(express.json());
app.use(cookieParser()); // the middleware (npm install cookie-parser)
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
mongoose.connect(process.env.DB)
.then(()=> console.log("Database is connected"))
.catch((err)=>console.log('Database is not connected', err) )
app.use('/uploads', express.static(__dirname + '/uploads'));

const secret = "yygiguihuhuihiuhuihhhhuuh";

app.post('/register', async (req, res)=>{
    try {
        const {username, password} = req.body;
        if(username.length < 4 || await UserModel.findOne({username})|| password.length < 6){
            res.status(400).json({
                message: "Please follow credential rules"
            });
        } 
        const userInfo =  await User.create({
            username,
            password: await bcrypt.hash(password,10),
        }); 
        res.json({ message: "Registration is successful. You can now log-in"});        

    } catch (error) {
        console.log(error);
    }
})

app.post('/login', async(req, res)=>{
    try {
        const {username, password} = req.body; 
        //check if the user exist 
        const blogUser =  await UserModel.findOne({username}); 
        //if does not  exist 
        if(!blogUser || password.length < 6){
            throw error
        }

       // if it does exist, continnue to check the paassword
        const isMatched =await bcrypt.compare(password, blogUser.password);
        if(isMatched){
            jwt.sign({username, id: blogUser._id},secret, {}, (error, token)=>{
                if (error) throw error; 
                res.cookie('token', token).json({
                    id: blogUser._id, 
                    username : blogUser.username
                }); 
            })
        }else{
           throw error
        }
      
    } catch (error) {
       res.status(400).send(error)
    }
        
})

app.get('/own/:id', async(req, res)=>{

    const {id } = req.params;
   res.json(await Post.find({ author : id }));
}
)
app.get('/profile', (req, res) =>{
    try {
        const {token} = req.cookies; 
        jwt.verify(token,secret, {}, (error, info) => {
            if(error){throw error}
            res.json(info); 
        });
    } catch (error) {
        res.status(400).send(error)
    }    
});

app.post('/logout', (req,res)=>{
    try {
        res.cookie('token', '').json('Logout is successful');
    } catch (error) {
        console.log(error);
    }
})

app.post('/post', uploadMiddleware.single('file'), async(req, res) =>{
    try {
        const {originalname,path} = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path+'.'+ext;
        fs.renameSync(path, newPath);

        const {token} = req.cookies; 
     
        const {title, summary, content}  = req.body
        jwt.verify(token,secret, {}, async (error, info) => {
            if (error) throw error
            const newPost = await Post.create({
                title, 
                summary, 
                content, 
                cover: newPath, 
                author:info.id
            });
            res.json({newPost})
        });   
    } catch (error) {
        
    }
})


app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
    let newPath = null;
    if(req.file){
        const {originalname,path} = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path+'.'+ext;
        fs.renameSync(path, newPath);
    }
    if(!req.file){
        console.log("no file");
    }
    const {token} = req.cookies; 
    jwt.verify(token,secret, {}, async (error, info) => {
        if (error) throw error
        const {id, title, summary, content} = req.body;
        console.log(req.body)
        const postInfo = await Post.findById(id)
        const isAuthor = JSON.stringify(postInfo.author) === JSON.stringify(info.id); 
        if(!isAuthor){
            throw error
        }
        await Post.updateOne({_id : id},
        {
            title,
            summary,  
            content : content, 
            cover: newPath? newPath : postInfo.cover}
        )
        res.json(postInfo)
    })
});

app.get('/post', async (req,res) => {
    res.json(
      await Post.find()
        .populate('author', 'username')
        .sort({createdAt: -1})
        .limit(20)
    );
  });

app.delete('/post/:id', async(req,res)=>{
    const {id} = req.params;
    const result = await Post.deleteOne({_id:id});
    if(result.deletedCount === 1){
        res.json({message : " the deletion is successful"})
    }
})

app.get('/post/:id', async (req, res)=>{
    const {id} =  req.params; 
    res.json(await Post.findById(id).populate('author', 'username'));
})
app.listen(4000, ()=> console.log("server started"));

