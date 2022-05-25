import React from 'react'
import "./Home.scss"
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import Navbar from '../../../Components/Admin/Navbar/Navbar'
import Widget from '../../../Components/Admin/widgets/Widget'
import Chart from '../../../Components/Admin/Chart/Chart'
import Featured from '../../../Components/Admin/Featured/Featured'
function Home({users}) {
  return (
    <div className='home'>
       <Sidebar />
      <div className="homeContainer">
        <Navbar users={users}/>
        <div className="widgets">
          {/* <h1>{users}</h1> */}
          <Widget type="user"/>
          <Widget type="products"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          
        </div>
        <div className="charts">
          <Featured/>
          <Chart  title="Last 6 months {Revenue}"/>
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
      </div>*/}
      </div> 
    </div>
  )
}

export default Home
