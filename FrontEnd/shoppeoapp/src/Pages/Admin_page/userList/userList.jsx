import "./userList.css";

import {MdDelete} from "react-icons/md"

import { userRows } from "../../../Admin/dummyData/admin_dummy_data";
import { Link } from "react-router-dom";
import { useState } from "react";

import React from 'react'

const UserList = () => {
  const [data,setdata]=useState(userRows)
  return (
    <div>
     {data.map((item)=>{
        return  <div>{item.id}</div>
     })}
    </div>
  )
}

export default UserList
