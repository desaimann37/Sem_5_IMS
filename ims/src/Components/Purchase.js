import React, { useState } from 'react';
import SideBar from '../UI/SideBar';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import '../CSS/MainItems.css';
import '../CSS/CrudTable.css';
import '../CSS/Purchase.css'; // Create a CSS file for your Purchase component

function Purchase() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to show the form
  const showForm = () => {
    setIsFormVisible(true);
  };
  const submitHandler = ()=>{
    

  }

  // Function to hide the form
  const hideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <div className='main-container'>
        <SideBar />
        <div className='content'>
          <br />
          <center>
            <button className='Addbutton' onClick={showForm}>
              Add Items
            </button>
          </center>
          <div className='row'>
            <div>
              <br />
              <center>
                <table id='test-table'>
                  <thead>
                    <tr style={{ backgroundColor: 'hsl(39, 84%, 81%)' }}>
                      <th>
                        <h2>Items</h2>
                      </th>
                      <th>
                        <h2>No. of Items</h2>
                      </th>
                      <th>
                        <h2>Actions</h2>
                        <br />
                        (Delete / Update)
                      </th>
                    </tr>
                  </thead>
                  <tfoot></tfoot>
                  <tbody style={{ backgroundColor: '#f8f8ff' }}>
                    <tr>
                      <td>lorem1</td>
                      <td>lorem2</td>
                      <td>
                        <center>
                          <Link to='/update'>
                            {' '}
                            <ModeEditIcon fontSize='large' />
                          </Link>
                          <Link to='/delete'>
                            <DeleteOutlineIcon
                              style={{ color: 'red' }}
                              fontSize='large'
                            />{' '}
                          </Link>
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>lorem1</td>
                      <td>lorem2</td>
                      <td>
                        <Link to='#'>
                          {' '}
                          <center>
                            <ModeEditIcon fontSize='large' />
                            <DeleteOutlineIcon
                              style={{ color: 'red' }}
                              fontSize='large'
                            />{' '}
                          </center>
                        </Link>
                      </td>
                    </tr>
                    {/* Additional table rows */}
                  </tbody>
                </table>
              </center>
            </div>
          </div>
        </div>
      </div>
      {isFormVisible && (
        <div className='overlay'>
          <div className='popup-form'>
            <h2>Add Items Form</h2>
            {/* Add your form fields and content here */}
            Enter Name of Item :  <input />
            <br/>
            <br/>
            Enter No. of Items :   <input />
            <br/>
            <br/>
            <br/>
            <br/>
            <button className="submit" onClick={submitHandler}>Submit</button>
            <button className="close" onClick={hideForm}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Purchase;
