import './App.css';
import './UI/Body.js';
import React from 'react';
import {BrowserRouter, Route, Routes , Link} from "react-router-dom";
import Home from './UI/Home';
import Purchase from './Components/Purchase';
import Vendors from './Components/Sidebar_Components/Vendors';
import History from './Components/Sidebar_Components/History';
import { useEffect} from 'react';
import PurchaseReport from './Components/Sidebar_Components/PurchaseReport';
import BuyBackReport from './Components/Sidebar_Components/BuyBackReport';
import MaintainanceReport from './Components/Sidebar_Components/MaintainanceReport'; 
import Items from './Components/Sidebar_Components/Items';
import BuyBack from './Components/BuyBack';
import Maintainance from './Components/Maintainance';
import Writeoff from './Components/Writeoff';
// import axios from 'axios';
// import Login from './Components/AuthComponents/Login/Login';
import { useState } from 'react';
import MainHeader from './Components/AuthComponents/MainHeader/MainHeader';
import Navigation from './Components/AuthComponents/MainHeader/Navigation';
import Signup from './Components/AuthComponents/Signup/Signup';
import SignupConfirmation from './UI/SignupConfirmation';

function App() {

/*  -> Testing backend data to be fetched on frontend

  const [items , setItems] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:9000/login')
    .then((res)=>{
      setItems(res.data);
      console.log(res.data);
    })
    .catch((err)=>{
      console.log('error catched while testing /api/test path');
    })
  } , []);

*/
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInInfo === '1'){
      setIsLoggedIn(true);
    }
  },[]);
  // useEffect(()=>{
  

  // } ,[isLoggedIn]);

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn' , 1);
    setIsLoggedIn(true);
  }
/* Use this if we want to do stuff related to signup 
  const signupHandler = ()=>{

    setIsLoggedIn(true);
  }
*/
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  return (
    <div className="App">  
      <BrowserRouter>
        <header className='common_header'>
           <Link className='header' to="/"><h1 className='stripe-text'>Inventory Management</h1></Link>
        </header>
        <hr className='hr'/>
        
        <Routes>
          <Route path="/" element={<Home isLogIn={isLoggedIn} onLogout={logoutHandler} />} />
          <Route path="/signup-confirmation" element={<SignupConfirmation />} />
          <Route path="/login" element={<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />} />
          <Route path="/signup" element={<Signup isAuthenticated={isLoggedIn} onLogout={logoutHandler} /*onSignup={signupHandler}*//>} />
          <Route path='/login/nav' element={<Navigation isAuthenticated={isLoggedIn} onLogout={logoutHandler} onLogin={loginHandler}/>} />
          <Route path="/purchase" element={<Purchase/>} /> 
          <Route path="/buyback" element ={<BuyBack/>} />
          <Route path="/maintainance" element ={<Maintainance />} />
          <Route path="/writeoff" element ={<Writeoff />} />

          <Route path="/vendors" element={<Vendors />} />
          <Route path="/history" element={<History />} />
          <Route path="/items" element={<Items />} />

          <Route path="/reports/purchase" element={<PurchaseReport />} />
          <Route path="/reports/buyback" element={<BuyBackReport />} />
          <Route path="/reports/maintainance" element={<MaintainanceReport />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
