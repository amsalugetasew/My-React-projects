import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({type}) => {
  let data;
  const amount=100;
  const diff=20;
  switch(type){
    case "user":
      data={
        title: "USERS",
        isMony: false,
        link: "See all users",
        icon: (
        <PersonOutlineOutlinedIcon 
        className="icons"
        style={
          {
            color: "crimson",
            backgroundcolor: "rgba(255, 0, 0, 0.2)",
          }
        }
        />
        ),
      };
      break;
      case "order":
      data={
        title: "ORDERS",
        isMony: false,
        link: "See all orders",
        icon: (
        <ShoppingCartOutlinedIcon 
          className="icons"
          style={
            {
              color: "goldenrod",
              backgroundcolor: "rgba(218, 165 0, 0.2)",
            }
          }
          />),
      };
      break;
      case "earning":
      data={
        title: "ERNING",
        isMony: true,
        link: "View net earning",
        icon:( 
        <MonetizationOnOutlinedIcon 
        className="icons"
        style={
          {
            color: "green",
            backgroundcolor: "rgba(0, 128 0, 0.2)",
          }
        }
        />),
      };
      break;
      case "balance":
      data={
        title: "BALANCE",
        isMony: true,
        link: "See details",
        icon: (
        <AccountBalanceWalletOutlinedIcon 
        className="icons"
        style={
          {
            color: "purple",
            backgroundcolor: "rgba(128, 0, 128, 0.2)",
          }
        }
        />),
      };
      break;
      default:
        break;
  }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMony && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage postive">
            <KeyboardArrowUpIcon/> {diff}%</div>
            {data.icon} 
        </div>
    </div>
  )
}

export default Widget