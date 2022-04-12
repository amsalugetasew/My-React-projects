import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon/>
        </div>
        <div className="bottom">
            <div className="featureChart">
                {/* <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/> */}
            </div>
            <p className="title">Total Sales Made Today</p>
            <p className="amount">$420</p>
            <p className="Desc">
                Previous transactions processing. Last payments may not be included
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="resultAmount">$10.5k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="resultAmount">$10.5k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="resultAmount">$10.5k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured