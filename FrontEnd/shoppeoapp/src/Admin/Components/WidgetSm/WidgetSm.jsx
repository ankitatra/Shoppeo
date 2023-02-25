import "./WidgetSm.css";
import {useState,useEffect} from "react"
import {MdVisibility} from "react-icons/md"
import { userRequest } from "../../../Admin_RequestMethod";

export default function WidgetSm() {
  const  [users,setuser]=useState([]) 
  useEffect(()=>{
      const getUser=async()=>{
        try{
          const res=await userRequest.get("user/")
          setuser(res.data)
        }catch(err){

        }
       
      }
      getUser()
  },[])       
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {users.map(user=>(
         <li className="widgetSmListItem" key={user._id}>
         
         <img
           src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
           alt=""
           className="widgetSmImg"
         />
         <div className="widgetSmUser">
           <span className="widgetSmUsername">{user.username}</span>
           <span className="widgetSmUserTitle">{user.age}||24</span>
           <span className="widgetSmUserTitle">{user.address}|| india</span>
           <span className="widgetSmUserTitle">{user.mobile}||8091725522</span>
         </div>
         <button className="widgetSmButton">
           <MdVisibility className="widgetSmIcon" />
           Display
         </button>
       </li>
       ))}
       </ul>
       
      
       
       
      
    </div>
  );
}