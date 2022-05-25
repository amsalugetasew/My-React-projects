import React from 'react'
import Navbar from '../../Components/Admin/Navbar/Navbar';
import Sidebar from '../../Components/Admin/Sidebar/Sidebar';
import "./ChangePhoto.scss";
function ChangePhoto() {
  return (
    <div className='chagePhoto'>
        <Sidebar />
        <div className="chagePhotoContainer">
        <Navbar />
        <div className="top">
            top chage profile picture
        </div>
        <div className="bottom">
            bottom chage profile picture
        </div>
        </div>
    </div>
  )
}

export default ChangePhoto