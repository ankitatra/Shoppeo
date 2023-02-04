// const mongoose=require("mongoose")
// const connection=mongoose.connect("mongodb+srv://ankita:ankita@cluster0.ylqzmwq.mongodb.net/shopeo?retryWrites=true&w=majority")

// module.exports={
//     connection
// }
const mongoose=require("mongoose")
                                   
const connection=mongoose.connect("mongodb+srv://ankita:ankita@cluster0.mbmdn0q.mongodb.net/shopeo?retryWrites=true&w=majority")

module.exports=({connection})