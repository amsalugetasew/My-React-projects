import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../firebase';
import Footer from '../../Public/Footer/Footer';
import Navebar from '../../Public/Navbar/Navbar';
import "./Signin.scss";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Signin() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ""
    });
    // const {email, password} =formData
    const initialValues = {
        role: "",
        email: "",
        password: ""
    };
    const [formValue, setFormValue] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [email
        // , setEmail
    ] = useState("");
    const [password
        // , setPassword
    ] = useState("");
    const { dispatch } = useContext(AuthContext)
    const [
        // error, 
        setError] = useState(false);
    const navigate = useNavigate();
    const handleChane = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValue));
        setIsSubmit(true);
    }
    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValue);
        }
    }, [formValue, formError, isSubmit]);
    const validate = (values) => {
        const errors = {}
        if (!values.role) {
            errors.role = "Role is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        else if (values.password.length < 6) {
            errors.password = "Length of password should be at least 6"
        }
        else if (formValue.role === "Admin") {
            return navigate("/admin/");
        }
        else if (formValue.role === "Officer") {
            return navigate("/officer");
        }
        else if (formValue.role === "Customer") {
            return navigate("/customer");
        }
        return errors;
    }

    const handleLogin = (e) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                handleSubmit();
                console.log(email);
            })
            .catch((error) => {
                setError(true);
            });

    }

    const options = [
        {
            label: "Select Role",
            value: "",
        },
        {
            label: "Admin",
            value: "Admin",
        },
        {
            label: "Officer",
            value: "Officer",
        },
        {
            label: "Customer",
            value: "Customer",
        },
    ];
    return (
        <div className='signin'>
            <div className="signinContainer">
                <Navebar />
                <div className="widgets">
                    <div className="Left">Left</div>
                    <div className='content'>
                        <form onSubmit={handleSubmit}>
                            {/* <>{JSON.stringify(formValue, undefined, 2)}</>
                   <>{JSON.stringify(options.value, undefined, 2)}</> */}
                            <div className="formInput">
                                <h1>Login Form</h1>
                                <div className="field">
                                    <label htmlFor="lb">Role</label>
                                    <select name='role' onChange={handleChane}>
                                        {options.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <p>{formError.role}</p>
                                </div>


                                <div className="field">
                                    <label htmlFor="">Email</label>
                                    <div> 
                                    <PersonAddAltIcon className="inputIcon"/>
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder='Email'
                                            value={formValue.email}
                                            onChange={handleChane}
                                        />
                                        </div>
                                    <p>{formError.email}</p>
                                </div>
                                <div className="field">
                                    <label htmlFor="">Password</label>
                                    <div><input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        placeholder='Password'
                                        value={formValue.password}
                                        onChange={handleChane}
                                    />
                                    <VisibilityOffIcon 
                                    className='showPassword'
                                    onClick={() => setShowPassword(
                                        (prevState) => !prevState)} /></div>
                                    <p>{formError.password}</p>
                                </div>

                               <div className='btn'> <button onClick={handleLogin}>Sign In<KeyboardArrowRightIcon className='rightIcon'/></button>
                                <Link to = '/updatePassword' className='forgotPassword'>Forgot Password</Link>
                                <Link to = "/signup" className='signup'>Sign Up </Link>
                                </div>                                
                            </div>
                        </form>
                    </div>
                    <div className="right">Right</div>
                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Signin
