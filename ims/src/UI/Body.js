import React from 'react'
import ShopIcon from '@mui/icons-material/Shop';
import '../CSS/Body.css'
import {Link} from 'react-router-dom';
import RestoreIcon from '@mui/icons-material/Restore';
import ConstructionTwoToneIcon from '@mui/icons-material/ConstructionTwoTone';
import RecyclingIcon from '@mui/icons-material/Recycling';

function Body() {

  return (
    <div className='body'>
       <div className='row_1_rectangle'>
        <div className='reactangle_purchase'>
            <Link to="/purchase" className='common_link'><ShopIcon className='shopIcon' fontSize='large'/><h1 className='h1_text'>Purchase</h1> </Link>
        </div>
        <div className='rectangle_buyback'>
            <Link to="/buyback" className='common_link'><RestoreIcon className="buyBack" fontSize='large'/><h1 className='h1_text'>BuyBack</h1></Link>
        </div>
        </div>
        <div className='row_2_rectangle'>
        <div className='rectangle_writeoff'>
            <Link to="/writeoff" className='common_link'><RecyclingIcon className="writeoff" fontSize='large'/><h1 className='h1_text'>WriteOff</h1></Link>
        </div>
        <div className='rectangle_maintainance'>
            <Link to="/maintainance" className='common_link'><ConstructionTwoToneIcon className="maintainance" fontSize='large'/><h1 className='h1_text'>Maintainance</h1></Link>
        </div>
      </div>
    </div>
  )
}

export default Body