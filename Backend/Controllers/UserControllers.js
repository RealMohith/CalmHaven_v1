const jwt = require("jsonwebtoken");
require ("dotenv").config();
const People = require("../Models/UserModel")


const LoginController = async(req,res)=>{
    try {
        const {name,password} = req.body;
        
        if(user && (user.pass == password)){
            const token = jwt.sign({name:name},process.env.JWT_SECRET_KEY,{expiresIn: "1h"});
            return res.json({ msg : "Logged in Successfully" , token : token});
        }
        res.status(400).json({message:"Username or password is wrong"});

    } catch (error) {
        res.status(401).json({message:error.message});
    }
};
const SignupController = async(req,res)=>{
    try{
        const {name,password} = req.body;
        if(await People.findOne({name:name})){
            return res.status(400).json({message:"User already exists"});
        };
        
        const User = new People({name:name,pass:password});
        await User.save();
        const token = jwt.sign({name:name},process.env.JWT_SECRET_KEY,{expiresIn: "1h"})
        res.json({message:`User created successfully at ${User.created_at}` ,token:token});

    }catch(error){
        res.status(401).json({message:error.message});
    }
    
};
module.exports = {LoginController , SignupController}