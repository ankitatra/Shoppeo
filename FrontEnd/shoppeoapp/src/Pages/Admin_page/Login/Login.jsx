import React ,{useState}from "react"
import {useDispatch} from "react-redux"
import { login } from "../../../redux/Admin_apiCalls"


const  Admin_Login=()=>{
    const [username,setUsername]=useState("")
    const [password,setpassword]=useState("")
    const dispatch=useDispatch()
    const handleclick=(e)=>{
        e.preventDefault()
        login(dispatch,{username,password})
    }
    return(
        <div style={{alignItems:"center",justifyContent:"center",height:"100vh",alignItems:"column"}}>
            <input  style={{padding:10,marginBottom:20 }}type="text" placeholder="username" onChange={e=>setUsername(e.target.value)}/>
            
            <input style={{padding:10,marginBottom:20 }}type="password" placeholder="password" onChange={e=>setpassword(e.target.value)}/>
            <button style={{padding:10,width:100}}onClick={handleclick}>Login</button>
        </div>
    )
}
export default Admin_Login