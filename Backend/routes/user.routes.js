const express=require("express")
const {UserModel}=require("../models/user.model")
const jwt=require("jsonwebtoken")

const bcrypt=require("bcrypt")
const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {email,pass,name,age}=req.body
    try {
        bcrypt.hash(pass,5,async(err,hash)=>{
            if(err){
                console.log(err)
            }else{
                const user=new UserModel({email,pass:hash,name,age})
                await user.save()
                res.send("Resister")
            }
        })
       
    } catch (error) {
        res.send("Error the registering user")
        console.log(error)
    }
   
})

userRouter.post("/login",async(req,res)=>{
   const {email,pass}=req.body
   try {
    const user=await UserModel.find({email:email})

    console.log(user)
    if(user.length>0){
        bcrypt.compare(pass,user[0].pass,(err,result)=>{
            if(result){
                const token=jwt.sign({userID:user[0]._id},"masai")
                res.send({"msg":"Login successful","token":token})
            }else{
                res.send("Wrong Credential")
            }
        })
      
    }else{
        res.send("Wrong Credential")
    }
   
   } catch (error) {
    res.send("Something went wrong")
    console.log(err)
   }
   
})

module.exports=({userRouter})
