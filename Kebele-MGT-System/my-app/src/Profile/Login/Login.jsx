import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./Login.scss"
import { signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../../firebase"
import {AuthContext} from "../../Context/AuthContext"

const Login = () => {  
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)
  const [user, setUser] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAcount, setHasAcount] = useState(false);
  const [messages, setMessages] = useState('');
  const initialValue = {email:"", password:""}
  const [formValue, setFormValue] = useState(initialValue);
const clearInputs =()=>{
  setEmail("");
  setPassword("");
}
const clearErrors = () =>{
  setEmailError("");
  setPasswordError("");
}


  const handleSignup = (e) => {
    // clearErrors();
    // signInWithEmailAndPassword(auth, email, password)
    // .catch((err) => {
    //   switch(err.code) {
    //     case "auth/email-already-in-use":
    //     case "auth/invalid-email":
    //       setEmailError(err.message);
    //       break;
    //     case "auth/weak-password":
    //       setPasswordError(err.message);
    //       break;
    //   }
    // });
  }
// // const handleLogout = () =>{
// //   app.auth().signOut();
// // };
const handleChange = (e) => {
//   const x = "nkjff";
//   if (x.trim().length !== 0)
//   {
//     if(x.trim().length < 10)
//   {
//     setMessages("under");
//   }
//   else {
//   setMessages(x);
//   }
// }
//   else
//   {
//     setMessages("nothing");
//   }
  // const {name, value} = e.target;
  // setFormValue({...formValue, [name]: value});
  // setEmail(formValue.email)
}
useEffect(() =>{
  handleChange();
},[]);
  const handleLogin = (e) => {      
    clearErrors();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type: "LOGIN", payload:user})
        navigate("/");
        console.log(email);
      })
      .catch((error) => {
        setError(true);
      });
   
  }
  const x = formValue.email;
  return (
    <div className='login'>
      <pre>{JSON.stringify(x).replaceAll('"', '')}</pre>
      <div className="loginContainer">
        
        <label htmlFor="">UserName:</label>
        <input 
        type="email" 
        name="email"
        autoFocus
        required
        // value={formValue.email}
        // value={(formValue.email).replaceAll('"', '')}
        // onChange={handleChange}
        onChange= {(e) => setEmail(e.target.value)}
        />
        {/* <>{JSON.stringify(formValue.email)}</> */}
        <p className="errorMsg">{emailerror}</p>
        <label htmlFor="">Password:</label>
        <input 
        type="password" 
        name='password'
        autoFocus
        required
        // value={(formValue.password).replaceAll('"', '')}
        // onChange={handleChange}
        onChange= {(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="buttonContainer">
          {hasAcount ? (
            <>
            <button onClick={handleSignup}>Sing Un</button>
            <p>Have an account ? <span onClick={() => setHasAcount(!hasAcount)}>Sign In</span></p>
            </>
          ) : (
            <>
            <button onClick={handleLogin}>Sign In</button>
            <p>Don't have an account ? <span onClick={() => setHasAcount(!hasAcount)}>Sign Up</span></p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login