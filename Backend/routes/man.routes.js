const express=require("express")
const manModel = require("../models/man.model")
const {ManModel}=require("../models/man.model")
const manRouter=express.Router()


manRouter.get("/",async(req,res)=>{
    // res.send("All the notes")
    try {
        const data=await ManModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})


manRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try {
        const new_note=new ManModel(payload)
        await new_note.save()
        res.send("created the notes")
    } catch (error) {
       console.log(error)
       res.send({"msg":"somthing went wrong"})
    }
    
})

manRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    const man=await ManModel.findOne({"_id":id})
    const userID_in_man=man.userID
    const userID_making_req=req.body.userID
    try {
        if(userID_making_req!==userID_in_man){
            res.send({"msg":"You are not authorized"})
        }else{
            await ManModel.findByIdAndUpdate({"_id":id},payload)
            res.send("update the notes")
        }
       
    } catch (error) {
        console.log(error)
        res.send({"msg":"Somthing went wrong"})
        
    }
   
})

manRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try {
        await ManModel.findByIdAndRemove({"_id":id})
        res.send("Delete the notes")
    } catch (error) {
        console.log(error)
        res.send({"msg":"Somthing went wrong"})
        
    }
   
    
})


module.exports=({manRouter})