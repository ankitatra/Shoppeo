import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home"
import { Pay } from "./Payment";
import Login from "./Login";
import Register from "./Register_Page";
import ProductList from "./ProductList";
import Product from "./Product";
import Cart from "./Cart";
import {useSelector} from "react-redux"
import { Admin_Dasboard } from "./Admin_page/dashboard";
import HomeAdmin from "./Admin_page/home/home";
import UserList from "./Admin_page/userList/userList";
export const AllRoutes = () => {
    const user =useSelector(state=>state.user.currentuser)
   
    return (
      
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Pay />}></Route>
                <Route path="/success" element={<div>sucess</div>}></Route>
                
                
                <Route path="/admin" element={<HomeAdmin/>}></Route>
                <Route path="/admin/userlist" element={<UserList/>}/>
            </Routes>
        </>
    )
}