import Footer from "../Footer/Footer"
import Navebar from "../Navbar/Navbar"
import "./Service.scss"

function Service() {
  return (
    <div className='service'>
      <div className="serviceContainer">
      <Navebar/>
        <div className="widgets">
        <div className="left">Left</div>
          <div className="content">Content Services</div>
          <div className="righ">Right</div>
        </div>
        <div className="Footer">
        <Footer/>
        </div>          
        </div>
      </div>
  )
}

export default Service