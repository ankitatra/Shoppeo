import react from "react"
import { Box ,Button,Grid,GridItem,Image,Input,Stack,Text} from "@chakra-ui/react"
import { Check } from "../asset/Check"
import shoppeo from "../asset/Shoppeo.png"
import { BiSearch } from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
export const Navbar=()=>{
    return(
        <>
            <Box>
                <Stack backgroundColor={"#F9F9F9"}>
                    <Box display={"flex"} border={"1px solid black"}>
                 <Box>
                 <Image marginLeft={"20%"}width={"60%"} src={shoppeo}/>
                 </Box>
                  <Box display={"flex"} marginRight={"150px"}>
                  <BiSearch style={{
                    color:"#9494f9",
                    marginTop:"1em"
                 }}/> 
                    <Input marginTop={"0.5em"} border={"1px solid #9494f9 "} width={"600px"}type="text" placeholder="search"/>
                  </Box>
                  <Box>
                    <Button marginTop={"0.5em"} backgroundColor={"#9494f9"} width={"100px"}>Login</Button>
                  </Box>
                  <Box  marginLeft={"5%"}display={"flex"}>
                    <AiOutlineShoppingCart size={30} style={{
                        color:"#9494f9",
                        marginTop:"1em"
                       }}/>
                    <Text border={"1px solid red"} marginTop={"1em"}>Cart</Text>
                  </Box>
                  </Box>
                </Stack>
                <Stack backgroundColor={"#A9D1E9"}>
                <Grid width={"80%"} margin={"auto"}templateColumns='repeat(7, 1fr)' gap={7}>
                        <GridItem w='80%' h='10'  >Mobiles</GridItem>
                        <GridItem w='80%' h='10' >Grocery</GridItem>
                         <GridItem w='80%' h='10' >Cloths</GridItem>
                         <GridItem w='80%' h='10'  >Electronics</GridItem>
                         <GridItem w='80%' h='10'  >Home</GridItem>
                         <GridItem w='80%' h='10'  >Jwellaery</GridItem>
                         <GridItem w='80%' h='10'  >Footwear</GridItem>
                    </Grid>
                </Stack>
            </Box>
        </>
    )
}