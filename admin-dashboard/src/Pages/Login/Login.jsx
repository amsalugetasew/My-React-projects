import React, { useContext, useState } from 'react'
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
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type: "LOGIN", payload:user})
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  }
  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='Email...' onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder='Password...' onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span>Wrong email or Password</span>}
      </form>
    </div>
  )
}

export default Login