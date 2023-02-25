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
import ProductListA from "./Admin_page/productList/productList";
import User from "./Admin_page/user/user";
import ProductA from "./Admin_page/ProductA/ProductA";
import NewUser from "./Admin_page/newUser/newUser";
import NewProduct from "./Admin_page/newProduct/newProduct";
import Admin_Login from "./Admin_page/Login/Login";

export const AllRoutes = () => {
    const user =useSelector(state=>state.user.currentuser)
    // const admin=false
   const admin= JSON.parse(JSON.parse (localStorage.getItem("persist:root")).user).currentuser.isadmin||false
   console.log(admin)
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
               
                <Route path="/admin/login" element={<Admin_Login/>}></Route>
               
                <Route path="/admin" element={admin &&<HomeAdmin/>}></Route>
                <Route path="/admin/userlist" element={admin &&<UserList/>}/>
                <Route path="/admin/productlist" element={admin &&<ProductListA/>}/>

                <Route path="/admin/user/:user_id" element={admin &&<User/>}></Route>
                <Route path="/admin/product/:product_id" element={admin &&<ProductA/>}/>
                <Route path="/admin/newuser" element={admin &&<NewUser/>}/>
                <Route path="/admin/newProduct" element={admin &&<NewProduct/>}/>
               
            </Routes>
        </>
    )
}