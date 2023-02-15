const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema(
    {
        title:{type:String,required:true,},
        desc:{type:String,required:true},
        img:{type:Array},
        cat:{type:Array},
        category:{type:String,required:true},
        subtitle:{type:String,required:true},
        genre:{type:String,required:true},
        size:{type:Array},
        color:{type:String,required:true},
        price:{type:Number,required:true},
        discount:{type:Number,required:true},
        inStock:{type:Boolean,default:true}
    },
    {timestamps:true}
)
module.exports=mongoose.model("Product",ProductSchema)