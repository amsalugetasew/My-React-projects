import "./Single.scss"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Avater from '../../Components/Image/profile.jpg'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src={Avater} alt="" className="itemImage"/>
            <div className="details">
              <h1 className="itemTitle">Getasew Amsalu</h1>
              <div className="detalItem">
                <span className="itemKey">Email: </span>
                <span className="itemValue">amsalugetasew12@gmail.com</span>
                </div>
                <div className="detalItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+251 928 531 589</span>
                </div>
                <div className="detalItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Gondar Maraki</span>
                </div>
                <div className="detalItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Ethiopia</span>
                </div>
            </div>
            </div>
        </div>
        <div className="right"></div>
        </div>        
        <div className="bottom">
        </div>
      </div>
    </div>
  )
}

export default Single