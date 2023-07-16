import React from 'react'
import Body from './Body'
import SideBar from './SideBar'
import '../CSS/Home.css'

function Home() {
  return (
    <div class="home">
        <SideBar />
        <Body/>
    </div>
  )
}

export default Home