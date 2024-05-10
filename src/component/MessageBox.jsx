import React from "react";
import MessageStore from "./Messagestore";
export default function Messagebox(){
    return(
        <div className="chatBox">
            <MessageStore />
            <MessageStore />
            <MessageStore />
            <MessageStore />
            <MessageStore />
            <MessageStore />
        </div>
    )
}