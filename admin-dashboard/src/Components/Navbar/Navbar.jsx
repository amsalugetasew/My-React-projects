import "./Navbar.scss"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Avater from '../Image/profile.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search" />
                <SearchSharpIcon/>
            </div>
            <div className="items">
                <div className="item"><LanguageIcon className="icons"/> English</div>
                <div className="item"><DarkModeOutlinedIcon className="icons"/></div>
                <div className="item"><FullscreenOutlinedIcon className="icons"/></div>
                <div className="item"><NotificationsNoneOutlinedIcon className="icons"/>
                <div className="counter">1</div>
                </div>
                <div className="item"><ChatBubbleOutlineOutlinedIcon className="icons"/>
                  <div className="counter">2</div>
                </div>
                <div className="item"><FormatListBulletedOutlinedIcon className="icons"/>
                 </div>
                <div className="item">
                  <img src={Avater} className="avater" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar