import "./userList.css";

import {MdDelete} from "react-icons/md"

import { userRows } from "../../../Admin/dummyData/admin_dummy_data";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,Image,Button
} from '@chakra-ui/react'
import React from 'react'
import Topbar from "../../../Admin/Components/topbar/Topbar";
import Sidebar from "../../../Admin/Components/sidebar/sidebar";

const UserList = () => {
  const [data,setdata]=useState(userRows)
  return (
    <div>
    <Topbar/>
    
    <div style={{display:"flex"}}>
    <div  >
     <Sidebar />
   </div>
   <div style={{width:"80%",marginLeft:"20px"}}>
   <TableContainer>
    <Table variant='simple'>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Profile</Th>
          <Th>UserName</Th>
          <Th>Email</Th>
          <Th>Status</Th>
          <Th isNumeric>Transaction</Th>
          <Th>Delete</Th>
          <Th>Edit</Th>
        </Tr>
      </Thead>
      <Tbody>
      {data.map((item)=>(
      <Tr>
          <Td><Image style={{width:"30px",borderRadious:"100%"}}src={item.avatar}/></Td>
          <Td>{item.username}</Td>
          <Td>{item.email}</Td>
          <Td>{item.status}</Td>
          <Td isNumeric>{item.transaction}</Td>
          <Td><MdDelete/></Td>
          <Td><Button>Edit</Button></Td>
        </Tr>
      ))}
      </Tbody>
      
    </Table>
  </TableContainer>
    </div>
    </div>
    </div>
  )}



export default UserList
