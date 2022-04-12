import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'

import "./Home.scss"
import Widget from '../../Components/widgets/Widget'
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
      </div>
    </div>
  )
}

export default Home