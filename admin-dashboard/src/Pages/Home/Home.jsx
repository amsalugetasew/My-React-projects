import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'

import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer"><Navbar/></div>
    </div>
  )
}

export default Home