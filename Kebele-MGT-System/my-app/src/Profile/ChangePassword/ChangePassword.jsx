import React from 'react'
// import Navbar from '../../../Components/Admin/Navbar/Navbar'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import Navbar from '../../Components/Admin/Navbar/Navbar'
import "./ChangePassword.scss"
function ChangePassword() {
  return (
    <div className='changePassword'>
         <Sidebar />
        <div className="changePasswordContainer">
        <Navbar />
        <div className="top">
            top change Password
        </div>
        <div className="bottom">
            bottom change Password
        </div>
        </div>
    </div>
  )
}

export default ChangePassword