import React from 'react'
import styled from "styled-components";
import {categories} from "../data"
import { mobile } from "../responsive";
import CategoryItem from './CategoryItem';

const Container = styled.div`
border:1px solid green;
 display:flex;
 padding:20;
 justify-content:space-between
`;
const Categories = () => {
  return (
    <Container>
     
      {categories.map((item,i)=>{
       {/* <CategoryItem item={item}/> */}
       return <CategoryItem item={item} key={item.id}/>
      })}
    </Container>
  )
}

export default Categories