import React from "react";
import { Route,Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
export const AllRoutes=()=>{
    return(
        <> 
        <Routes>
            <Route path="/" element={<Navbar/>} />
        </Routes>
       
        
        </>
    )
}