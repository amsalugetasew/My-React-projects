import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import "./FamilyMember.scss";
function FamilyMember() {
    const initialValues = {
        firstname: "", 
        middlename: "",
        lastname: "",
        username: "", 
        email: "", 
        password: "", 
        // firstname: "", 
        // middlename: "",
        // lastname: ""
    };
    const [formValue, setFormValue] =useState(initialValues);
    const [formError, setFormError] =useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChane = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
        // console.log(formValue);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormError(validate(formValue));
        setIsSubmit(true);
    }
    useEffect (() => {
        console.log(formError);
        if(Object.keys(formError).length === 0 && isSubmit){
            console.log(formValue);
        }
    }, [formError]);
    const validate = (values) => {
        const errors = {}
        const regex = "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/";
        
        if(!values.firstname)
        {
            errors.firstname = "FirstName is required";
        }
        if(!values.middlename)
        {
            errors.middlename = "Middle Name is required";
        }
        if(!values.middlename)
        {
            errors.lastname = "Last Name is required";
        }
        if(!values.username)
        {
            errors.username = "UserName is required";
        }
        if(!values.email)
        {
            errors.email = "Email is required";
        }
        // else if(!regex.test(values.email)){
        //     errors.email = "This is not Valid Email format"
        // } 
        if(!values.password)
        {
            errors.password = "Password is required";
        }
        else if(values.password.length < 6){
            errors.password = "Length of password should be at least 6"
        }    
        return errors;     
    }
    return (
        <div className='familyMembership'>
            <Sidebar />
            <div className="familyMembershipContainer">
                <Navbar />
                <div className="top">
                {/* <>{JSON.stringify(formValue, undefined, 2)}</>  */}
                {/* {Object.keys(formError).length === 0 && isSubmit ?
                 (<span>Succesully Submitted</span> ) :
                (<pre></pre>)} */}
                    <form onSubmit={handleSubmit}>
                    <div className="formInput">
                    {Object.keys(formError).length === 0 && isSubmit ?
                 (<span>Succesully Submitted</span> ) :
                (<pre></pre>)}
                        <h1>Family Form</h1>
                        <div className="field">
                            <label htmlFor="lb">First Name</label>
                            <input 
                            type="text" 
                            name='firstname'
                             placeholder='First Name' 
                             value={formValue.firstname}
                             onChange = {handleChane}
                             />
                             <p>{formError.firstname}</p>
                        </div>
                        <div className="field">
                            <label htmlFor="">Middle Name</label>
                            <input 
                            type="text" 
                            name='middlename' 
                            placeholder='Middle Name' 
                            value={formValue.middlename}
                             onChange = {handleChane}
                            />
                            <p>{formError.middlename}</p>
                        </div>
                        <div className="field">
                            <label htmlFor="">Last Name</label>
                            <input 
                            type="text" 
                            name='lastname' 
                            placeholder='Last Name' 
                            value={formValue.lastname}
                             onChange = {handleChane}
                            />
                            <p>{formError.lastname}</p>
                        </div>


                        <div className="field">
                            <label htmlFor="lb">UserName</label>
                            <input 
                            type="text" 
                            name='username'
                             placeholder='UserName' 
                             value={formValue.username}
                             onChange = {handleChane}
                             />
                             <p>{formError.username}</p>
                        </div>
                        <div className="field">
                            <label htmlFor="">Email</label>
                            <input 
                            type="email" 
                            name='email' 
                            placeholder='Email' 
                            value={formValue.email}
                             onChange = {handleChane}
                            />
                            <p>{formError.email}</p>
                        </div>
                        <div className="field">
                            <label htmlFor="">Password</label>
                            <input 
                            type="password" 
                            name='password' 
                            placeholder='Password' 
                            value={formValue.password}
                             onChange = {handleChane}
                            />
                            <p>{formError.password}</p>
                        </div>

                        <button>Submit</button>
                        </div>
                    </form>

                </div>
                <div className="bottom">
                    bottom membership
                </div>
            </div>
        </div>
    )
}

export default FamilyMember