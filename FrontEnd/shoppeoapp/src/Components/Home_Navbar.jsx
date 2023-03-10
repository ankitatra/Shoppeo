import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import {BiSearch,BiCart } from "react-icons/bi"
import { Badge } from '@chakra-ui/react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}

`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Home_Navbar = () => {
  const quantity=useSelector(state=>state.cart.quantity)
  const [val,setVal]=useState("")
  const navigate=useNavigate()
  const handlechange=(e)=>{
   
    setVal(e.target.value)
    // console.log(val)
  }

  const  onSearch=()=>{
  console.log(val)
  navigate(`/products/${val}`)
  }
  // useEffect(()=>{
  //   const timer=setTimeout(()=>{
  //     console.log(val)
  //     navigate(`/products/:${val}`)
  //   },5000)
  //   return()=>clearTimeout(timer)
  // },[val])
  // console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            
            <Input placeholder="Search"  value={val} onChange={handlechange} />
            
          {/* <Input placeholder="Search"  value={val} onChange={handlechange} /> */}
          <BiSearch  style={{ color: "gray", fontSize: 16 }} onClick={onSearch}/>
          </SearchContainer >
        </Left>
        <Center>
          <Logo>Shoppeo</Logo>
        </Center>
        <Right>
          <Link to={"/register"}><MenuItem>REGISTER</MenuItem></Link>
          <Link to={"/login"}> <MenuItem>SIGN IN</MenuItem></Link>
         
          <Link to={"/cart"}>
          <MenuItem>
    
          <Badge color="primary">
                <div>{quantity}</div>
                <BiCart />
              </Badge>
          </MenuItem>
          </Link>
       
        </Right>
      </Wrapper>
      
      </Container>
     
  )
}

export default Home_Navbar
