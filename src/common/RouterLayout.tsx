import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export const RouterLayout: React.FC = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>  
            <Footer/> 
        </>
    )
}