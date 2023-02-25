import "./productList.css";

import {MdDelete} from "react-icons/md"

import { productRows } from "../../../Admin/dummyData/admin_dummy_data";
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

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import Topbar from "../../../Admin/Components/topbar/Topbar";
import Sidebar from "../../../Admin/Components/sidebar/sidebar";
import{getProducts,deleteProduct} from "../../../redux/apiCalls"
import { login } from "../../../redux/Admin_apiCalls"
const ProductListA = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.admin_product.products);
  console.log("jh",products)
  // const [data,setdata]=useState(products)
   const handleDelete = (id) => {
    deleteProduct(id, dispatch);
    // console.log("id",r)
  };
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  // const handleDelete = (id) => {
  //   deleteProduct(id, dispatch);
  //   // console.log("id",r)
  // };
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
          <Th>Product</Th>
          <Th>Stock</Th>
          <Th>Title</Th>
          <Th isNumeric>Price</Th>
          <Th>Delete</Th>
          <Th>Edit</Th>
        </Tr>
      </Thead>
      <Tbody>
      {products.map((item)=>(
      <Tr key={item._id}>
          <Td><Image style={{width:"30px",borderRadious:"100%"}}src={item.img[0]}/></Td>
          <Td>{item.genre}</Td>
          <Td>{item.inStock?"true":"false"}</Td>
          <Td>{item.title}</Td>
          <Td isNumeric>{item.price}</Td>
          <Td><MdDelete onClick={()=>handleDelete(item._id)}/></Td>
          {/* <Td><button onClick={()=>handleDelete(item._id)}>delete</button></Td> */}
          <Td><Link to={"/admin/product/" + item._id}><Button >Edit</Button></Link></Td>
        </Tr>
      ))}
      </Tbody>
      
    </Table>
  </TableContainer>
    </div>
    </div>
    </div>
  )}



export default ProductListA
