import React from "react";
import { Route,Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import Home from "./Home"
import { Pay } from "./Payment";
export const AllRoutes=()=>{
    return(
        <> 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pay" element={<Pay/>}></Route>
            <Route path="/success" element={<div>sucess</div>}></Route>
        </Routes>
       
        
        </>
    )
}