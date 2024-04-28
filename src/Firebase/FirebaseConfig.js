// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAJOp65b8mQ0CX7ta9F4QBqf9BTZ3YRl0",
  authDomain: "b9a10-store.firebaseapp.com",
  projectId: "b9a10-store",
  storageBucket: "b9a10-store.appspot.com",
  messagingSenderId: "74502679674",
  appId: "1:74502679674:web:f2287800e3ff9cbf8d1fc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;