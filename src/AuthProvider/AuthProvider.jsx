import { GithubAuthProvider, GoogleAuthProvider,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig";


export const AuthContext =createContext(null);

// social auth providers:--> 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)

// create User:--> 
const createUser=(email, password,photoUrl)=>{
    // setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password,photoUrl)
}

    const signInUser = (email, password) =>{
        // setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

//google login-->
const googleLogin=()=>{
    // setLoading(true)
   return signInWithPopup(auth, googleProvider)
   
}
// github login:-->
const githubLogin =()=>{
    // setLoading(true)
   return signInWithPopup(auth, githubProvider)
}
// LOGOUT:-->
const logOut=()=>{
    setUser(null)
    
    signOut(auth)
}

// observer --:>
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
         
         if (user) {
             
           setUser(user);
        //    setLoading(false)
         } 
          
       });
          return () =>unsubscribe();   
 },[]);

    const allValues ={
        // logOut,loading
        user,createUser,signInUser, googleLogin,githubLogin,logOut
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;