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
import { DarkModeContext } from '../../Context/DarkModeContext';
const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
        <MenuSharpIcon/>
        <span className="logo">
          GechAdmin
        </span>
        </Link>
        
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{textDecoration: "none"}}>
          <li><DashboardIcon/><span>Dashboard</span></li>
          </Link>
          <p className="title">List</p>
          <Link to="/users" style={{textDecoration: "none"}}>
          <li><PeopleOutlineIcon/><span>Users</span></li>
          </Link>
          <Link to="/products" style={{textDecoration: "none"}}>
          <li><ProductionQuantityLimitsIcon/><span>Products</span></li>
          </Link>
          <li><PaymentIcon/><span>Orders</span></li>
          <li><AirportShuttleOutlinedIcon/><span>Delivery</span></li>
          <p className="title">Usefull</p>
          <li><AssessmentIcon/><span>Statues</span></li>
          <li><NotificationsNoneOutlinedIcon/><span>Notifications</span></li>
          <p className="title">Services</p>
          <li><SystemSecurityUpdateGoodOutlinedIcon/><span>System Health</span></li>
          <li><PsychologyOutlinedIcon/><span>Logs</span></li>
          <li><SettingsOutlinedIcon/><span>Settings</span></li>
          <p className="titel">User</p>
          <li><PersonAddAltOutlinedIcon/><span>Profile</span></li>
          <li><LogoutOutlinedIcon/><span>Logout</span></li>
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