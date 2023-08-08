import './App.css';
import './UI/Body.js';
import {BrowserRouter, Route, Routes , Link} from "react-router-dom";
import Home from './UI/Home';
import Purchase from './Components/Purchase';
import Vendors from './Components/Sidebar_Components/Vendors';
import History from './Components/Sidebar_Components/History';
import { useState , useEffect} from 'react';
import PurchaseReport from './Components/Sidebar_Components/PurchaseReport';
import BuyBackReport from './Components/Sidebar_Components/BuyBackReport';
import MaintainanceReport from './Components/Sidebar_Components/MaintainanceReport'; 
import Items from './Components/Sidebar_Components/Items';

function App() {

  const[backendData , setBackendData] = useState([]);

  useEffect(() => {
      fetch("http://localhost:9000/testAPI").then(
        response => response.text()
      ).then(
        data => {
          setBackendData(data);
          console.log(backendData.toString());
        }
      )
  });

  return (
    <div className="App">
      <BrowserRouter>
        <header className='common_header'>
          <Link className='header' to="/"><h1 className='stripe-text'>Inventory Management</h1></Link>
        </header>
        <hr className='hr'/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/purchase" element={<Purchase/>} /> 
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
