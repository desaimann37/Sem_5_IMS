import React, { useState } from 'react'
import SideBar from '../UI/SideBar';
import '../CSS/MainItems.css';
import axios from 'axios';
import '../CSS/CrudTable.css';

function Writeoff() {
  
  const [writeoffData , setWriteOffData] = useState([]);
  const writeOffDataFun = async ()=>{
    await axios.get('http://localhost:9000/admin/getPurchaseProductNames')
    .then(
      (data)=>{
        console.log(data?.data);
        setWriteOffData(data?.data);
      },
      (error)=>{
        console.log("Errr while getting data of writeoff from backend! " + error);
      }
    )
  }
  const displayData = ()=>{
    return writeoffData.map((item , index)=>{
      <div key={index}>
          <p>Product Name : {item.product_name}</p>
          <p>Vendor Name : {item.vendor_name}</p>
      </div>
    });
  }

  return (
    <div className='main-container'>
        <SideBar />
      <div className='content'>
      <button className='Addbutton' onClick={writeOffDataFun}>
        Get Data
      </button>
      <div className="data-display">
          {displayData()}
        </div>
      </div>
    </div> 
  )
}

export default Writeoff