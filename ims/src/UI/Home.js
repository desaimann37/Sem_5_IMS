import React from 'react'
import Body from './Body'
import SideBar from './SideBar'
import '../CSS/Home.css'
import { Navigate } from 'react-router-dom'

const Home = (props) => {
  
  if(!props.isLogIn){
    return (
      <Navigate to="/login/nav"/>
    )
  }
    return (
      <>
      {console.log(props.isLogIn)}
      <div class="home">
          <SideBar />
          <Body/>
      </div>
      </>
    )
}

export default Home