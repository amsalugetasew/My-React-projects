import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import {Link} from "react-router-dom"
import {useContext} from "react"
import { DarkModeContext } from '../../../Context/DarkModeContext';
// import styled from "styled-components";

const Sidebar = () => {
  // let item;
  // const [subnav, setSubnav] = useState(false);
  
  // const showSubnav = () => setSubnav(!subnav);
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        
        <Link to="/" style={{textDecoration: "none"}}>
        <MenuSharpIcon/>
        <span className="logo">
          Kebele Customer
        </span>
        </Link>
        {/* <Link to="/" style={{textDecoration: "none"}}>
        <div className="x"> x
        <div className="y">y</div>
          <div className="w">z</div>
        </div>
        </Link> */}
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/admin" style={{textDecoration: "none"}}>
          <li><DashboardIcon/><span>Dashboard</span></li>
          </Link>
          <p className="title">Manage Account</p>
          <Link to="/admin/users" style={{textDecoration: "none"}}>
          <li><PeopleOutlineIcon/><span>Users</span></li>
          </Link>
          <Link to="/admin/deactivate" style={{textDecoration: "none"}}>
          <li><ProductionQuantityLimitsIcon/><span>DeActivate</span></li>
          </Link>
          <Link to="/admin/activate" style={{textDecoration: "none"}}>
          <li><PaymentIcon/><span>Activate</span></li>
          </Link>
          <Link to="/deliveries" style={{textDecoration: "none"}}>
          <li><AirportShuttleOutlinedIcon/><span>Delivery</span></li>
          </Link>

          <p className="title">Request Services</p>
          <Link to="/families" style={{textDecoration: "none"}}>
          <li><PeopleOutlineIcon/><span>Membership</span></li>
          </Link>
          <Link to="/products" style={{textDecoration: "none"}}>
          <li><ProductionQuantityLimitsIcon/><span>ID Request</span></li>
          </Link>
          <Link to="/orders" style={{textDecoration: "none"}}>
          <li><PaymentIcon/><span>Clearance Request</span></li>
          </Link>
          <Link to="/deliveries" style={{textDecoration: "none"}}>
          <li><AirportShuttleOutlinedIcon/><span>Oil and Sugar Request</span></li>
          </Link>

          
          {/* <p className="title">Approve Services Request</p>
          <li><SystemSecurityUpdateGoodOutlinedIcon/><span>System Health</span></li>
          <li><PsychologyOutlinedIcon/><span>Logs</span></li>
          <li><SettingsOutlinedIcon/><span>Settings</span></li> */}

          <p className="title">Usefull</p>
          <li><SystemSecurityUpdateGoodOutlinedIcon/><span>System Health</span></li>
          <li><PsychologyOutlinedIcon/><span>Logs</span></li>
          <li><SettingsOutlinedIcon/><span>Settings</span></li>
          <li><AssessmentIcon/><span>Statues</span></li>
          <li><NotificationsNoneOutlinedIcon/><span>Notifications</span></li>

          <p className="titel">User</p>
          <Link to="/updatePhoto" style={{textDecoration: "none"}}>
          <li><PersonAddAltOutlinedIcon/><span>Profile</span></li>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
          <li><LogoutOutlinedIcon/><span>Logout</span></li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
        <div className="colorOption" onClick={() => dispatch({type: "TOGGLE"})}></div>
      </div>
    </div>
  )
}

export default Sidebar