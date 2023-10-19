const express = require('express');
const router = express.Router();
const buybackDetails = require('../Models/buyBackDetails.js');

router.use(express.json());

//buyBack Details :
router.post('/buyBack/file/upload' , async(req , res)=>{
    
    try{
        const buyback_data = await req.body;
        console.log(buyback_data);
    }catch(err){
        console.log('Error while getting data of upload file of buybackDetails schema' + err);
    }
});




module.exports = router;
