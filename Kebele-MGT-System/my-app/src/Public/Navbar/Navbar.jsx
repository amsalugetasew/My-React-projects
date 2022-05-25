import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LanguageIcon from '@mui/icons-material/Language';
import { useNavigate } from "react-router-dom";
import "./Navbar.scss"
function Navebar() {
  const navigate = useNavigate();
  const toHome = (e) =>{
    navigate("/home");
  }
  const toAbout = () => {
    navigate("/about")
  }
  const toContact = () => {
    navigate("/contact")
  }
  const toService = () => {
    navigate("/service")
  }
  const toHelp = () => {
    navigate("/help")
  }
  const toSignIn = () => {
      navigate("/signin");
  }
  const toSignUp = () => {
    navigate("/signup");
}
  return (
    <div className='navbar'>
      <div className="wrapper">
        <menu onClick={toHome}>Home</menu>
        <menu onClick={toContact}>Contact</menu>
        <menu onClick={toAbout}>About</menu>
        <menu onClick={toService}>Service</menu>
        <menu onClick={toHelp}>Help</menu>            
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchSharpIcon />
        </div>
        <div className="search">
          <button>Search</button>
        </div>
        <div className="items">
          <div className="item"><LanguageIcon className="icons" /> English</div>
          <div className="item" onClick={toSignIn}>Sign In</div>
          <div className="item" onClick={toSignUp}>Sign Up</div>
        </div>
      </div>
    </div>
  )
}

export default Navebar