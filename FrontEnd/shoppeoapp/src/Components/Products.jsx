import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts} from "../data"
import axios from 'axios';
import Single_Product from "./Single_Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;
const Products = ({cat,filters,sort}) => {
  console.log(cat,filters,sort)
 
  const [product,setProduct] =useState([])
  const [filterproduct,setFilterProduct] =useState([])

  useEffect(()=>{
   const getProduct=async()=>{
    try {
      const res=await axios.get(cat?
        `https://shoppeo-server.cyclic.app//api/product/?subtitle=${cat}`
      :"https://shoppeo-server.cyclic.app//api/product")
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
   }
   getProduct()
  },[cat])

  useEffect(()=>{
     cat && setFilterProduct((
      product.filter(item=>
        Object.entries(filters).every(([key,value])=>
        item[key].includes(value))
      )
     ))
  },[product,cat,filters])




// useEffect(()=>{
//     if(sort==="newest"){
//       setFilterProduct(prev=>{
//         [...prev].sort((a,b)=>a.createdAt-b.createdAt)
//       })
     
//       // console.log(filterproduct)
//       // console.log(sort)
//     }
//     else if(sort==="asc"){
//       setFilterProduct(prev=>{
//         [...prev].sort((a,b)=>a.price-b.price)
//       })
//       console.log(sort)
//     }else if(sort==="desc"){
//       setFilterProduct(prev=>{
//         [...prev].sort((a,b)=>b.price-a.price)
//       })
//       console.log(sort)
//     }
// },[])
  return (
    <Container>
      {cat?
      filterproduct.map((item) => (
       <Single_Product item={item} key={item.id} />
      )) : 
      product.slice(0,8).map((item) => (
        <Single_Product item={item} key={item.id} />
       ))
      }
    </Container>
  )
}

export default Products
