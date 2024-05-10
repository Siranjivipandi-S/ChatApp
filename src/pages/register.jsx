import { createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import { auth,storage,database } from "../firebase";
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from "react-router-dom";
export default function Register(){
    const [userName,setuserName]=useState("");
    const [userEmail,setuserEmail]=useState("");
    const [userPassword,setuserPassword]=useState("");
    const [file,setFile]=useState("")
    const [Err,setErr]=useState(false);
    const navigator=useNavigate();
const handleSubmit=async(e)=>{
    e.preventDefault();
    try{

        const response=await createUserWithEmailAndPassword(auth,userEmail,userPassword)
        const storageRef = ref(storage, userName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on( 
        (error) => {
            setErr(true)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                await updateProfile(response.user,{
                    userName,
                    photoURL:downloadURL,
                });
                await setDoc(doc(database, "userdata" , response.user.uid),{
                    uid:response.user.uid,
                    userName,
                    userEmail,
                    photoURL:downloadURL,
                })
                await setDoc(doc(database,"userchat",response.user.uid),{
                })
                navigator("/");
            });
        });
    }catch{
                setErr(true)
            }};
    return(
        <div className="register">
            <div className="form-container">
                <div className="wrapper">
                    <h2 className='title'>Chat App</h2>
                    <form onSubmit={handleSubmit}>
                    <h3>Register</h3>
                    <input type="text" className="name" placeholder='User Name' onChange={((e)=>{
                        setuserName(e.target.value)
                    })}>
                    </input>
                    <input type="email" className="mail" placeholder='Enter Email' onChange={((e)=>{
                        setuserEmail(e.target.value)
                    })}>
                    </input>
                    <input type="password" className="pass" placeholder='Enter Password' onChange={((e)=>{
                        setuserPassword(e.target.value)
                    })}>
                    </input>
                    <input type="file" id='imgFile' style={{display:"none"}} onChange={((e)=>{
                        setFile(e.target.files[0])
                    })}></input>
                    <label htmlFor='imgFile'>
                    <img src='https://media.istockphoto.com/id/1248723171/vector/camera-photo-upload-icon-on-isolated-white-background-eps-10-vector.jpg?s=612x612&w=0&k=20&c=e-OBJ2jbB-W_vfEwNCip4PW4DqhHGXYMtC3K_mzOac0=' alt=''style={{cursor:"pointer"}}></img>
                    <span  style={{cursor:"pointer"}}>Add a Profile Image</span>
                    </label>
                    <button>Register</button>
                    <br></br>
                    {Err && <span className="errtag">Something Went Wrong</span>}
                    </form>
                    <p>Already have an Account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}