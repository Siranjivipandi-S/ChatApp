import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import ChatSection from "./chatSection";
export default function Sidebar(){
    return(
        <div className="sidebar">
            <Navbar/>
            <Search />
            <ChatSection/>

        </div>
    )
}