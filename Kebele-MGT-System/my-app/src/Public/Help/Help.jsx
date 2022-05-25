import "./Help.scss"
import Navebar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Help() {
  return (
    <div className='help'>
       <div className="helpContainer">
      <Navebar/>
        <div className="widgets">
          <div className="left">Left</div>
          <div className="content">Content Help</div>
          <div className="righ">Right</div>
        
        </div>
        <div className="Footer">
        <Footer/>
        </div>        
        </div>
      </div>
  )
}

export default Help