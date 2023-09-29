import React from 'react'
import SideBar from '../../UI/SideBar';
import '../../CSS/Items.css';

function Items() {
  return (
    <div className='items-container'>
        <SideBar />
      <div className='content'>
        <h1>Inside Items!!</h1>
      </div>
    </div>
  )
}

export default Items