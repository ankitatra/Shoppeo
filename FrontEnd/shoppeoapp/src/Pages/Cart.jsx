import {GrFormAdd} from "react-icons/gr"
import React, { useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {MdRemove} from "react-icons/md"
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/footer";
import Home_Navbar from "../Components/Home_Navbar";
import StripeCheckout from "react-stripe-checkout";
import { mobile } from "../responsive";
import shoppeo from "../asset/Shoppeo.png"
import {userRequest }from "../requestMethod"
// const KEY=process.env.REACT_STRIPE_KEY
const KEY="pk_test_51MZU6RSFT5zdEJkdH4zJchJCggEcohivBu8cekPp06UaPQ54UrfkGeaddngwqGk6hRAQtgTFGQSztMfTUoeyz2rn00WbS44ryZ"
const Key="pk_test_51MZU6RSFT5zdEJkdH4zJchJCggEcohivBu8cekPp06UaPQ54UrfkGeaddngwqGk6hRAQtgTFGQSztMfTUoeyz2rn00WbS44ryZ"
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {

  const [stripeToken,setStripeToken]=useState(null)
// toast.configure()

 const navigate=useNavigate()
  const cart=useSelector(state=>state.cart)
  console.log("cart",cart)
  const [product]=useState({
    name:"Shopio",
    price:cart.total,
    description:`Your Total is ${cart.total}`,

})
  const onToken=async(token,address)=>{
    setStripeToken(token)
    // const response=await axios.post("http://localhost:5000/checkout/payment",{token,product})
    // console.log(response.data)
    // navigate("/success")
//    if(response.status===200){
//      toast("Success payment is completed",{type:"success"})
//     //  navigate("/success")
//    }else{
//     toast("Failure payment is not completed",{type:"error"})
//    }

}

 useEffect(()=>{
    const makeRequest=async()=>{
        try {
           const res=await userRequest("/checkout/payment",
           {
            tokenId:stripeToken.id,
            amount:cart.total*100,
            // navigate("/success")
           }
           );
         
           console.log(res.data)
           navigate("/success")
        } catch (error) {
            console.log(error)
        }
    }
    stripeToken && makeRequest()
 },[stripeToken,cart.total,navigate])
console.log(stripeToken)
  return (
    <Container>
      <Home_Navbar/>
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
           {cart.products.map(product=>(
            <Product>
              <ProductDetail>
                <Image src={product.img[0]} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <GrFormAdd/>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <MdRemove />
                </ProductAmountContainer>
                <ProductPrice>$ {product.price *product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            ))}
            <Hr />
            
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
            name={product.name} 
            image={shoppeo}
            billingAddress
            shippingAddress
            description={product.description}
            amount={product.price*100}
            token={onToken}
            stripeKey={Key}
            
            >
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;