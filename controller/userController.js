import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { User } from '../Model/userModel.js';
import { generateCookie } from '../utilities/feature.js';

export const userRegister=async(req, res) => {
    const {name, email,password}=req.body;

    let user= await User.findOne({email});
    if(user) return res.status(404).json({
        success:false,
        message:"user already exist"
    })
const hashPassword= await bcrypt.hash(password,10)
user = await User.create({
    name,
     email,
     password:hashPassword 
})

generateCookie(user,res,201,"user Ragister Succefully")  
}


export const userLogin=async(req, res) => {
    const {email,password}=req.body;

    let user= await User.findOne({email});
if(!user) return res.status(400).json({
    success:false,
    message:'user not exist'
})
 const ismatch= await bcrypt.compare(password,user.password);

 if(!ismatch)return res.status(400).json({
    success:false,
    message:"invalid creditntial"
 })
 
generateCookie(user,res,201,`welcome ${user.name}`)  


// const token= jwt.sign({_id:user._id},'!@#$%^&*');
// res.status(201).cookie('token', token,{
//     httpOnly:true,
//     maxAge:10*60*1000
// }).json({
//     success:true,
//     message:`welcome to ${user.name}`
// })
}



export const userLogout=(req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"logout successfully"
    })
    }        


    export const getMyProfile=(req,res)=>{
        res.json({
            hello:"hi",
            user:req.user
        })
    }

    export const getUserById=async(req,res)=>{
        const  id =req.params.id;

        const user= await User.findById(id);

        if (!user) return res.status(404).json({
            success:false,
            message:"Invalid Id"
        })
    
            res.json({
                success:true,
                message:"this is single user",
                user
            })
    }