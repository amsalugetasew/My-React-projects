import "./Single.scss"
import Navbar from "../../../Components/Admin/Navbar/Navbar"
import Sidebar from "../../../Components/Admin/Sidebar/Sidebar"
import Chart from '../../../Components/Admin/Chart/Chart'
import Table from '../../../Components/Admin/Table/Table'
import Avater from '../../../Components/Admin/Image/profile.jpg'
const Single = ({users}) => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar users={users}/>
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
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending {Last 6 months}"/>
        </div>
        </div>        
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Single