import React from 'react'
import SideBar from '../UI/SideBar';
import { useState } from 'react';
import '../CSS/MainItems.css';
import axios from 'axios';
import Card from './AuthComponents/UI/Card';

function BuyBack() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  }

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  }
  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const uploadFile = async () => {
    console.log('Inside uploadFile()');
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
        // console.log(formData);

        const fileContent = await readFileAsDataUrl(selectedFile);
        console.log(fileContent);

        const fileObject = {
          _id: selectedFile._id,
          product_name: selectedFile.product_name,
          qty: selectedFile.qty,
          content: fileContent,
        };
        const jsonArray = [fileObject];
        console.log(jsonArray);


        await axios.post('http://localhost:9000/admin/buyBack/file/upload', jsonArray)
          .then((response) => console.log('File Uploaded Successfully!!'))
      }
    } catch (err) {
      console.log('Error while uploading file post request to the backend!!' + err);
    }
  };

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
   
}

  return (
    <div className='main-container'>
      <SideBar />
      <div className='content'>
      <Card >
        <input type='file' onChange={handleFileChange} />
        
        <div onDrop={handleFileDrop} onDragOver={handleDragOver} style={{ border: '1px dashed #ccc', padding: '20px' }}>
          Drag and drop a file here or click to select one.
        </div>
        
        <button onClick={uploadFile}>Upload</button>
        </Card>
      </div>
    </div>
  )
}

export default BuyBack