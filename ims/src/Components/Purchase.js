import React, { useState } from 'react';
import SideBar from '../UI/SideBar';
import { Link, /*Navigate*/ } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import '../CSS/MainItems.css';
import '../CSS/CrudTable.css';
import '../CSS/Purchase.css'; // Create a CSS file for your Purchase component
import { useEffect } from 'react';
import axios from 'axios';

const Purchase = (props) => {

  const [formData, setFormData] = useState({
    // _id: '',
    // product_id: '',
    // product_name: '',
    // vendor_name: '',
    // date_time: '',
    // admin_name: '',
  });
  // const [submittedItems, setSubmittedItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [numberOfItems, setNumberOfItems] = useState('');

  useEffect(() => {
    purchaseData();
  }, []);

  const handleProductChange = (e) => {
    setSelectedProductName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setNumberOfItems(e.target.value);
  };

  const purchaseData = async () => {

    await axios.get('http://localhost:9000/admin/getPurchaseProductNames')
      .then(
        (data) => {
          // console.log(data.data);
          // console.log(data.data[0].product_name);
          setFormData(data?.data);
          // console.log(formData);
        },
        (error) => {
          console.log("Error while getting data for purchaseData : " + error)
        }
      )
  }

  // Function to show the form
  const showForm = () => {
    setIsFormVisible(true);
  };

  // Function to hide the form
  const hideForm = () => {
    setIsFormVisible(false);
  };

  const submitHandler = async () => {
    const postData = {
      //No. of items and name of item selected in form 
      product_name: selectedProductName,
      quantity: numberOfItems,
    }
    try {
      const response = await axios.post("http://localhost:9000/admin", postData);
      // Add the submitted item to the submittedItems array
      

      console.log('Data successfully posted to the backend');
      // setSubmittedItems([...submittedItems, postData]);

      // // Clear the form input values
      // setSelectedProductName("");
      // setNumberOfItems("");
      //After Submit Hide Button
      hideForm();

    } catch (err) {
      console.log("Error While Posting Data To backend {quantity and product_name} : " + err);
    }
  }

  return (
    <>

      <div className='main-container'>
        <SideBar />
        <div className='content'>
          <br />
          <center>
            <button className='Addbutton' onClick={showForm}>
              <h2>Add Items</h2>
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

                    {/* Here add Dynamic <tr> <td> ... while submitting form with it's details */}
                    {/* {submittedItems.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product_name}</td>
                        <td>{item.quantity}</td>
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
                    ))} */}

                    <tr>
                        <td>CPU</td>
                        <td>2</td>
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
                        <td>Keyboard</td>
                        <td>5</td>
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
                      <tr>
                        <td>Monitor</td>
                        <td>10</td>
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
            Select Name of Item :
            <select value={selectedProductName} onChange={handleProductChange}>

              <option value={formData[0].product_name}>
                {formData[0].product_name}
              </option>
              <option value={formData[1].product_name}>
                {formData[1].product_name}
              </option>
              <option value={formData[2].product_name}>
                {formData[2].product_name}
              </option>
              <option value="productOther">
                <Link to="/purchase/otherItemForm">Other</Link>
              </option>

            </select>
            <br />
            <br />
            Enter No. of Items :   <input type='number' value={numberOfItems}
              onChange={handleQuantityChange}
              placeholder="Enter No. of Items" />
            <br />
            <br />
            <br />
            <br />
            <button className="submit" onClick={submitHandler}>Submit</button>
            <button className="close" onClick={hideForm}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}


export default Purchase;
