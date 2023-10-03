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
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
        await axios.post('http://localhost:9000/file/upload', formData)
          .then((response) => console.log('File Uploaded Successfully!!'))
      }
    } catch (err) {
      console.log('Error while uploading file post request to the backend!!' + err);
    }
  };

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