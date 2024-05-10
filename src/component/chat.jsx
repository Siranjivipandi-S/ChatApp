import React from "react";
import MessageBox from "./MessageBox";
import Footer from "./Footer";
import Header from "./header";
export default function Chat(){
    return(
        <div className="messages">
            <Header />
            <MessageBox />
            <Footer />
        </div>
    )
}