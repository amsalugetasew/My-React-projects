import "./About.scss"
import Navebar from '../Navbar/Navbar'
import Footer from "../Footer/Footer"

function About() {
  return (
    <div className='about'>
       <div className="aboutContainer">
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

export default About