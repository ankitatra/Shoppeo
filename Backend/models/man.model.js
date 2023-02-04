const mongoose=require("mongoose")
const manSchema=mongoose.Schema({
    img_url:String,
    name:String,
    price:Number,
    discount:String,
    fabric:String,
    userID:String
})

const ManModel=mongoose.model("man",manSchema)


module.exports=({

    ManModel
})