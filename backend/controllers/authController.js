const User=require("../models/User");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();

const register=async(req,res)=>{
    try{
        const {email,username,password}=req.body;
        const existingUser=await User.findOne({username});

        if(existingUser){
            return res.status(409).json({message:"Username already exist"});
        }

        const hashedPassword=await bcrypt.hash(password,10);
        const user=new User({email:email,username:username,password:hashedPassword});
        await user.save();
        res.status(201).json({message:"user registered successfully"});

    }catch(err){
       res.status(500).json({message:"Error in registering user",error:err.message});
    }
};

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});

        if(!user){
            return res.status(401).json({message:"Invalid username or password"});
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid username or password"});
        }

        const token=jwt.sign({email:user.email},process.env.JWT_SECRET);
        res.json({token});
    }
    catch(error){
        res.status(500).json({message:"error in logging",error:error.message});
    }
};

const protectedRoute=(req,res)=>{
    res.json({message:"Protected route acessed successfully"});
}

const getCurrentUser=async(req,res)=>{
    try{
      const token=req.headers.authorisation.split(' ')[1];
      const decodeToken=jwt.verify(token,process.env.JWT_SECRET);
      const user=await User.findOne({email:decodeToken.email});

      if(!user){
        return res.status(404).json({error:"User not found"});
      }

      res.json({username:user.username});
    }catch(error){
        res.status(500).json({message:"error fetching current user",error:error.message});
    }
};

module.exports={register,login,protectedRoute,getCurrentUser};


