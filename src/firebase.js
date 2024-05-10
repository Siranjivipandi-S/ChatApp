// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB9knv-VEfp4IajaW1KxUo0J3Bcfbpu-aI",
  authDomain: "chatapp-58736.firebaseapp.com",
  projectId: "chatapp-58736",
  storageBucket: "chatapp-58736.appspot.com",
  messagingSenderId: "995184579822",
  appId: "1:995184579822:web:87c0e305b6dd9dd0a74fff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const storage=getStorage();
export const database=getFirestore();