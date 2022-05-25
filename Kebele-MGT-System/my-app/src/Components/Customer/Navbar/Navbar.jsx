import "./Navbar.scss"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Avater from '../Image/profile.jpg'
// import { AuthContext } from "../../Context/AuthContext";
import { useState} from "react"
import { useNavigate } from "react-router-dom";
const Navbar = ({users}) => {
  // const { currentUser } = useContext(AuthContext);
  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const handleLogout = (e) =>{
    // navigate("/login");
    navigate("/signin");
  }
  const handleChangePassword = () => {
    navigate("/updatePassword")
  }
  const handleChangephoto = () => {
    navigate("/updatePhoto")
  }
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchSharpIcon />
        </div>
        <div className="items">
          <div className="item"><LanguageIcon className="icons" /> English</div>
          <div className="item"><DarkModeOutlinedIcon className="icons" /></div>
          <div className="item"><FullscreenOutlinedIcon className="icons" /></div>
          <div className="item"><NotificationsNoneOutlinedIcon className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="item"><ChatBubbleOutlineOutlinedIcon className="icons" />
            <div className="counter">2</div>
          </div>
          <div className="item"><FormatListBulletedOutlinedIcon className="icons" />
          </div>
          <div className="item">
            <div className="Main">
              <div className="DropDownContainer">
                <div className="DropDownHeader" onClick={toggling}>
                  <img src={Avater} className="avater" alt="" />{users}
                  </div>
                {isOpen && (
                <div className="DropDownListContainer">
                  <div className="DropDownList">
                    <div className="ListItem" onClick={handleChangephoto}>
                    Change Photo
                    </div>
                    
                    <div className="ListItem" onClick={handleChangePassword}>
                    Change Password 
                    </div>
                    <li className="ListItem" onClick={handleLogout}>
                    SignOut
                    </li>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar