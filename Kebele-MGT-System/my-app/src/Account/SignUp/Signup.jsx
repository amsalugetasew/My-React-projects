import "./Signup.scss"
import Navebar from '../../Public/Navbar/Navbar'
import Footer from "../../Public/Footer/Footer"

function Signup() {
  return (
    <div className='signup'>
         <div className="signupContainer">
      <Navebar/>
        <div className="widgets">
            <div className="left"></div>
        <form 
        // onSubmit={handleSubmit}
        >
             <div className="formInput">
                    {/* {Object.keys(formError).length === 0 && isSubmit ?
                        (<span>Succesully Submitted</span>) :
                        (<pre></pre>)} */}
                    {/* <h1>Family Form</h1> */}
                    <div className="field">
                        <label htmlFor="lb">First Name</label>
                        <input
                            type="text"
                            name='firstname'
                            placeholder='First Name'
                            // value={formValue.firstname}
                            // onChange={handleChane}
                        />
                        {/* <p>{formError.firstname}</p> */}
                    </div>
                    <div className="field">
                        <label htmlFor="">Middle Name</label>
                        <input
                            type="text"
                            name='middlename'
                            placeholder='Middle Name'
                            // value={formValue.middlename}
                            // onChange={handleChane}
                        />
                        {/* <p>{formError.middlename}</p> */}
                    </div>
                    <div className="field">
                        <label htmlFor="">Last Name</label>
                        <input
                            type="text"
                            name='lastname'
                            placeholder='Last Name'
                            // value={formValue.lastname}
                            // onChange={handleChane}
                        />
                        {/* <p>{formError.lastname}</p> */}
                    </div>


                    <div className="field">
                        <label htmlFor="lb">UserName</label>
                        <input
                            type="text"
                            name='username'
                            placeholder='UserName'
                            // value={formValue.username}
                            // onChange={handleChane}
                        />
                        {/* <p>{formError.username}</p> */}
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            // value={formValue.email}
                            // onChange={handleChane}
                        />
                        {/* <p>{formError.email}</p> */}
                    </div>
                    <div className="field">
                        <label htmlFor="">Phone Number</label>
                        <input
                            type="type"
                            name='phoneNumber'
                            placeholder='Phone Number'
                            // value={formValue.email}
                            // onChange={handleChane}
                        />
                        {/* <p>{formError.email}</p> */}
                    </div>
                    <div className="field">
                        <label htmlFor="">Phone Number</label>
                        <input
                            type="type"
                            name='phoneNumber'
                            placeholder='Phone Number'
                            // value={formValue.email}
                            // onChange={handleChane}
                        />
                        {/* <p>{formError.email}</p> */}
                    </div>
                    <div className="field">
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            // value={formValue.password}
                            // onChange={handleChane}
                        />
                        {/* <p>{formError.password}</p> */}
                    </div>

                    <button>Submit</button>
                </div>
            </form>
            <div className="right"></div>
        </div>
        <div className="Footer">
        <Footer/>
        </div>       
        </div>  
    </div>
  )
}

export default Signup
