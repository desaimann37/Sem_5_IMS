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
  var flag = false;

  const [purchasedItems, setPurchasedItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [numberOfItems, setNumberOfItems] = useState('');

  useEffect(() => {
    purchaseData();
    getPurchasedItems();
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
  const updateEntryHandler = async (item) => {

    flag = true;
    showForm();
    console.log(selectedProductName);
    console.log(numberOfItems);
    //Shown Form and update product_name 
    try {
      await axios.patch(`http://localhost:9000/admin/updateItem/${item._id}`, {
        //Update logic
        product_name: `${selectedProductName}`,
        qty: `${numberOfItems}`,
      }).then(() => console.log("Data Updated Successfully!!"));

    } catch (err) {
      console.log("error While updating record inside updateEntryHandler()");
    }
  }
  const downloadDataHandler = () => {
    const jsonData = JSON.stringify(purchasedItems, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'purchasedData.json';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  const deleteEntryHandler = async (item) => {
    //delete entry
    try {

      await axios.delete(`http://localhost:9000/admin/deleteItem/${item._id}`)
        .then(() => {
          setPurchasedItems((prevItems) => prevItems.filter((prevItem) => prevItem._id !== item._id));
          console.log('Item deleted successfully');
        });
    } catch (err) {
      console.log('Error while executing deleteEntryHandler() called' + err);
    }

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

      //After Submit Hide Button
      hideForm();

    } catch (err) {
      console.log("Error While Posting Data To backend {quantity and product_name} : " + err);
    }
  }
  const getPurchasedItems = async () => {

    await axios.get("http://localhost:9000/admin/getPurchasedProductDetails")
      .then((data) => {
        setPurchasedItems(data?.data);
      },
        (error) => {
          console.log("Error while getting data for purchasedProductData : " + error);
        }
      );
  };

  return (
    <>
      <div className='main-container'>
        <SideBar />
        <div className='content'>
          <br />
          <center>
            <button className='Addbutton' onClick={showForm}>
              <h2>{flag === true ? 'Update Items' : 'Add Items'}</h2>
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

                    {purchasedItems.map((item, index) => (
                      <tr key={index}>
                        <td><center>{item.product_name}</center></td>
                        <td><center>{item.qty}</center></td>
                        <td>
                          <center>
                            <button onClick={() => updateEntryHandler(item)}>
                              <ModeEditIcon fontSize='large' />
                            </button>
                            <button onClick={() => deleteEntryHandler(item)}><DeleteOutlineIcon
                              style={{ color: 'red' }}
                              fontSize='large'
                            /></button>

                          </center>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
                <br />
                <button className="downloadButton" onClick={() => downloadDataHandler()}><i className="fa fa-download"></i> Download Data</button>
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
