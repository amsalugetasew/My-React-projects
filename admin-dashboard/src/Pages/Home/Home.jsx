import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'

import "./Home.scss"
import Widget from '../../Components/widgets/Widget'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'
import Table from '../../Components/Table/Table'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer"><Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home