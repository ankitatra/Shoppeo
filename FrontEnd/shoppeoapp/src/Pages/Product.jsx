
import { useEffect, useState } from "react";
import {GrFormAdd} from "react-icons/gr"
import {MdRemove} from "react-icons/md"
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/footer";
import Home_Navbar from "../Components/Home_Navbar";
import Newsletter from "../Components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { pulblicRequest } from "../requestMethod";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex:1;
  display:grid;
  column-gap:50px;
  row-gap:50px;

`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {

  const location=useLocation();
  const id=location.pathname.split("/")[2]
   console.log(id)
  const[product,setproduct]=useState({})
  const[quantity,setquantity]=useState(1)
  const[color,setcolor]=useState("")
  const[size,setsize]=useState("")
 const dispatch=useDispatch()
  useEffect(()=>{
    const getproduct=async()=>{
      try {
        const res= await pulblicRequest.get("/product/find/"+id)
        setproduct(res.data)
        
        // console.log(res.data.img[1])
      } catch (error) {
        
      }
    }
    getproduct()
  },[id])

  console.log(product.img)
  console.log("color",color)
  // product.img.map(im=>{
  //   console.log(im)
  // })

  const handleQuantity=(i)=>{
    if(i==="dec"){
     quantity>1 && setquantity(prev=>prev-1)
    }
    if(i==="inc"){
      setquantity(prev=>prev+1)
    }
  }


  const handleclick=()=>{
    // console.log("hii")
    dispatch(
    addProduct({...product,quantity,color,size})
    )
  }
  return (
    <Container>
      <Home_Navbar/>
      <Announcement />
      <Wrapper>
        <ImgContainer>
        {product.img?.map((im,i)=>(
          
            <Image key={i} src={im} />
         
          
        ))}
         
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title} {product.category}</Title>
          <Desc>
           {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color={product.color} onClick={()=>setcolor(product.color)} />
              {/* <FilterColor color="darkblue" />
              <FilterColor color="gray" /> */}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setsize(e.target.value)}>
                {product.size?.map((si)=>(
                  <FilterSizeOption key={si}>{si}</FilterSizeOption>
                ))}
               
                {/* <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption> */}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <MdRemove onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <GrFormAdd onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleclick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer />
    </Container>
  );
};

export default Product;