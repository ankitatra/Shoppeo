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
const Products = ({cat,filter,sort}) => {
  // console.log(cat,filter,sort)
 
  const [product,setProduct] =useState([])
  const [filterproduct,setFilterProduct] =useState([])

  useEffect(()=>{
   const getProduct=async()=>{
    try {
      const res=await axios.get(`http://localhost:5000/api/product/`)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
   }
   getProduct()
  },[cat])
  return (
    <Container>
      {popularProducts.map((item) => (
       <Single_Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
