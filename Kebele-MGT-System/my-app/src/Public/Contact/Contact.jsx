import "./Contact.scss"
import Navebar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
function Contact() {
  return (
    <div className='contact'>
      <div className="contactContainer">
      <Navebar/>
        <div className="widgets">
        <div className="left">Left</div>
          <div className="content">Content Contact</div>
          <div className="righ">Right</div>
        </div>
        <div className="Footer">
        <Footer/>
        </div>      
        </div>
      
    </div>
  )
}

export default Contact

