const express=require("express")

const mongoose=require("mongoose")
const {connection}=require("./Config/db")
const {UserModel}=require("./models/user.model")
const{userRouter}=require("./routes/user.routes")
const {manRouter}=require("./routes/man.routes")
const {authenticate}=require("./middleware/authenticate.midleware")
const jwt=require("jsonwebtoken")

const bcrypt=require("bcrypt")
const app=express()
app.use(express.json())



app.get("/",(req,res)=>{
    res.send("welcome")
    console.log("hii")
})


// {
//     "img_url":"https://images.meesho.com/images/products/6984723/abfc5_400.jpg",
//     "name":"Kurta-Frok",
//     "price":450,
//     "discount":"20%",
//     "fabric":"silk"
// }

app.use("/users",userRouter)
app.use(authenticate)
app.use("/man",manRouter)

app.get("/data",(req,res)=>{
    const token=req.headers.authorization
    jwt.verify(token,"masai",(err,decode)=>{
       if(err){
        res.send("Invalid token")
        console.log(err)
       }else{
           res.send("Data...")
       }
    })

  
  
})
app.get("/cart",(req,res)=>{
    // const token=req.query.token
    // if(token==="abc123"){
    //     res.send("Cart Api")
    // }else{
    //     res.send("Login First")
    // }
    const token=req.headers.authorization
    jwt.verify(token,"masai",(err,decode)=>{
       if(err){
        res.send("Invalid token")
        console.log(err)
       }else{
           res.send("Cart Page")
       }
    })
})

app.get("/about",(req,res)=>{
    res.send("About Api")
})
app.get("/contact",(req,res)=>{
    res.send("Contact Api")
})

app.listen(8070,async()=>{
    try {
        await connection
        console.log("connected to the db")
    } catch (error) {
        console.log(error)
    }
    console.log("runing at 8070")
})