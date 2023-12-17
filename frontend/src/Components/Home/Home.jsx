import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import CreatePost from './Post/CreatePost'
import "./Home.scss";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='home'>
        <div className='sidebar'>
        <Sidebar/>
        </div>

        <div className='postCreator'><CreatePost/></div>
        </div>
    </div>
  )
}

export default Home