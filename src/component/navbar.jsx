import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
export default function Navbar(){;
    return(
        <div className="navbar">    
        <div className="logondtitle">
            <span className="logo">Chat App</span>
        </div>
            <div className="profiledata">
            <img src="https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg" alt=""></img>
             <span className="userName">Siranjivi</span>
            <button onClick={()=>signOut(auth)}>Logout!</button>  
            </div>
        </div>
    )
}