// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "reactadminpanel-e0268.firebaseapp.com",
  projectId: "reactadminpanel-e0268",
  storageBucket: "reactadminpanel-e0268.appspot.com",
  messagingSenderId: "725116414414",
  appId: "1:725116414414:web:5114db84f129d053f5e39f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();