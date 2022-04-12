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
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <MenuSharpIcon/>
        <span className="logo">
          GechAdmin
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li><DashboardIcon/><span>Dashboard</span></li>
          <p className="title">List</p>
          <li><PeopleOutlineIcon/><span>Users</span></li>
          <li><ProductionQuantityLimitsIcon/><span>Products</span></li>
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
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar