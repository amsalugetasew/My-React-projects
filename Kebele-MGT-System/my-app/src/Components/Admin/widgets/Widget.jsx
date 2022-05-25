import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import {useEffect, useState} from "react";
import { db } from "../../../firebase";
import {collection, query, where, getDocs} from "firebase/firestore";
const Widget = ({type}) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data;
  switch(type){
    
    case "family":
      data={
        title: "Members",
        isMony: false,
        link: "See all Members",
        query: "Members",
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
    case "user":
      data={
        title: "USERS",
        isMony: false,
        link: "See all users",
        query: "Users",
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
        query: "Orders",
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
      case "products":
      data={
        title: "Products",
        query: "Products",
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
  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      // console.log(prevMonth);
      const lastMonthQuery = query(
        collection(db, data.query),
         where("timeStamp", "<=" , today), 
         where("timeStamp", ">", lastMonth)
         );
         const prevMonthQuery = query(
          collection(db, data.query),
           where("timeStamp", "<=" , lastMonth), 
           where("timeStamp", ">", prevMonth)
           );
           const lastMonthData = await getDocs(lastMonthQuery);
           const prevMonthData = await getDocs(prevMonthQuery);
          //  console.log(lastMonthData);
           setAmount(lastMonthData.docs.length);
          let lmd= lastMonthData.docs.length;
          let pmd = prevMonthData.docs.length;
           setDiff(((lmd - pmd) / pmd) * 100);
    };
    fetchData();
  }, [data]);
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMony && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className={`percentage ${diff < 0 ? "negative" : "postive"}`}>
            {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
             {diff}%
            </div>
            {data.icon} 
        </div>
    </div>
  )
}

export default Widget