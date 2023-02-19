import React from "react";
import { Route,Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import Home from "./Home"
import { Pay } from "./Payment";
import Login  from "./Login";
import Register from "./Register_Page";
import ProductList from "./ProductList";
import Product from "./Product";
import Cart from "./Cart";
export const AllRoutes=()=>{
    const user=true
    return(
        
        <> 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={user?<Home/>:<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/products/:category" element={<ProductList/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/pay" element={<Pay/>}></Route>
            <Route path="/success" element={<div>sucess</div>}></Route>
        </Routes>
       
        
        </>
    )
}