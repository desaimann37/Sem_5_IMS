import React from 'react'
import SideBar from '../UI/SideBar'
import '../CSS/MainItems.css';

function Purchase() {
  return (
    <div className='main-container'>
        <SideBar />
      <div className='content'>
        <h1>Inside Purchase!!</h1>
      </div>
    </div> 
  )
}

export default Purchase