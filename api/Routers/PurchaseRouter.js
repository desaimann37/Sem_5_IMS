const express = require('express');
const router = express.Router();


// const PurchaseDetailsSchema = require('../Models/PurchaseDetails.js');
const ProductDetailsSchema = require('../Models/ProductDetails.js');
const adminPurchasedSchema = require('../Models/Admin.js');
// const AdminDetails = require('../Models/AdminDetails.js');

router.use(express.json());

//Purchase Details : 

router.get('/getPurchaseProductNames' , async(req , res)=>{
    console.log('Starting...');
    try{
    const response = await ProductDetailsSchema.find();
    console.log(response);
    res.json(response);
    }catch(err){
        console.log('error getting from router.get(/getPurchaseProductNames)');
        res.json({message : err});
    }
});

router.get('/getPurchasedProductDetails' , async(req , res)=>{
    try{
        const response= await adminPurchasedSchema.find();
        res.json(response);
    }catch(err){
        console.log('error getting from router.get(/getPurchasedProductDetails)');
        res.json({message : err});
    }

});

module.exports = router;
