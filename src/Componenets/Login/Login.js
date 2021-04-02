import React, { useContext } from 'react';
import img from '../../images/Group 573.png'
import './Login.css'
import firebase from "firebase/app";
import { useHistory, useLocation } from "react-router";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { userContext } from "../../App";
firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var provider = new firebase.auth.GoogleAuthProvider();
const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [userInfo , setUserInfo] = useContext(userContext)
    
    const handleSignIn = ()=>{
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const {email , displayName} = result.user
         setUserInfo({
             name: displayName,
             email: email,
         })
        history.replace(from);
        
      })
      .catch((error) => {
        
      });
  };
    
    return (
        <div className="login-container">
           <button onClick={handleSignIn} className="google-button">Sign in using <img src={img} alt=""/></button>
        </div>
    );
};

export default Login;<h1>Login</h1>