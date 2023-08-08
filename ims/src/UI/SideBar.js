import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../CSS/SideBar.css'
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';

function SideBar() {

  return (
    <div className='sidebar'>
      {/* <div className='sidebar__content'> */}
        <Sidebar className='npm_sidebar'>
          <Menu>
            <SubMenu label="Options" rootStyles={{backgroundColor:'#cbe9df'}} icon={<ListIcon />}>
              <MenuItem component={<Link to="/vendors"/>} className='menuItems' rootStyles={{borderColor:'#000000' , borderBlockidth:'2px'} }>
                Vendors
              </MenuItem>
              <MenuItem component={<Link to="/history"/>} className='menuItems' rootStyles={{borderColor:'#000000' , borderBlockidth:'2px'} }>
                History
              </MenuItem>
              <MenuItem component={<Link to="/items" />} className='menuItems' rootStyles={{borderColor:'#000000' , borderBlockidth:'2px'} }>
                Items
              </MenuItem>
            </SubMenu>

            <hr style={{color:'#000000'}}/>

            <SubMenu label="Reports" rootStyles={{backgroundColor:'#cbe9df'}} icon = {<PictureAsPdfTwoToneIcon /> }>

              <MenuItem component={<Link to="/reports/purchase"/>} className='menuItems' rootStyles={{borderColor:'#000000' , borderBlockidth:'2px'} }>
                Purchased
              </MenuItem>
              <MenuItem component={<Link to="/reports/buyback"/>} className='menuItems' rootStyles={{borderColor:'#000000' , borderBlockidth:'2px'} }>
                BuyBack
              </MenuItem>
              <MenuItem component={<Link to="/reports/maintainance"/>} className='menuItems' rootStyles={{borderColor:'#000000' , borderBlockidth:'2px'} }>
                Maintainance
              </MenuItem>
            </SubMenu>
            <br/><br/><br/><br/>
          </Menu>
        <center><button className="button-86"><h2>LogOut</h2></button></center>
        </Sidebar>
        {/* </div> */}
    </div>
  )
}

export default SideBar