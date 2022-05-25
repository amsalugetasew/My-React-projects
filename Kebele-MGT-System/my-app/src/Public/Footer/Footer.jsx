import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.scss'
// import Facebook from '../Image/facebook.png'
import { SocialIcon } from 'react-social-icons';
function Footer() {
  const navigate = useNavigate();
  const toContact = () => {
    navigate("/contact")
  }
  const toAbout = () =>{
    navigate("/about")
  }
  return (
    <div className='footer'>
       <div className='content'> 
       <span className='footerMenu'>Terms and Services</span>
        <span className='footerMenu' onClick={toContact}>Contact Information</span>
        <span className='footerMenu' onClick={toAbout}>About</span>
        <span className='socialMedia'><SocialIcon url="https://facebook.com/jaketrent" /></span>
        {/* <span className='footerMenu'><img src={Facebook} alt="" className='facebook'/></span> */}
        <span className='socialMedia'><SocialIcon url="https://twitter.com/jaketrent"/></span>
        <span className='socialMedia'><SocialIcon url="https://google.com/jaketrent" /></span>
        <span className='socialMedia'><SocialIcon url="https://instagram.com/jaketrent" /></span>
        <span className='socialMedia'><SocialIcon url="https://tiktok.com/jaketrent" /></span>
        </div>
        <span className='copyRight'> &copy; 2022 getasew and h/mariam </span>
    </div>
  )
}

export default Footer