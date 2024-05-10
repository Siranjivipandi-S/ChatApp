import React,{useState} from "react"
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth"
export default function Login(){
    const [err,setErr]=useState(false)
    const navigator=useNavigate();
const handlesubmit=async(e)=>{
    const useremail=e.target.value[0];
    const userpassword=e.target.value[1];
    try{
        await signInWithEmailAndPassword(auth, useremail, userpassword)
        navigator("/")
        console.log("success")
    }
    catch{
        setErr(true)
    }
}
    return(
        <div className="register">
            <div className="form-container">
                <div className="wrapper">
                    <h2 className='title'>Chat App</h2>
                    <form className='form-register' onSubmit={handlesubmit}>
                    <h3>Login</h3>
                    <input type="text" className="mail" placeholder='Enter Email'>
                    </input>
                    <input type="password" className="pass" placeholder='Enter Password'>
                    </input>
                    <button>Login</button>
                    </form>
                    {err && <span className="errtag">Something Went Wrong</span>}
                    <p>Doesn't have an Account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    )
}