const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/AuthController.js');
const Admin = require("../Models/Admin.js");

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

router.delete("/deleteItem/:id" , async(req , res)=>{

    // console.log(req.params.id);
    try{
        const itemId = req.params.id;
        const deletedItem = await Admin.findByIdAndRemove(itemId);
    
        if(!deletedItem){
          return res.status(404).json({message: "Item Not Found"});
        }
        
        res.status(200).json({message: "Item deleted Successfully!!"});
    
      }catch(err){
        console.log("Error while deleting entry from table in admin_purchased_item_delete" + err);
      }

});

router.patch("/updateItem/:id" , async(req , res)=>{
    try{
        const itemId = req.params.id;
        const updatedData = req.body;
        
        const updatedItem = await Admin.findByIdAndUpdate(itemId , updatedData , {new: true});
        //After Item is updated we need to delete that row from table
        const deletedItem = await Admin.findByIdAndDelete(itemId);

        if(!updatedItem){
            return res.status(404).json({message : "Item not Found"});
        }
        if(deletedItem){
            console.log('Item deleted Successfully with id : ' + deletedItem);
        }
        res.json(updatedItem);
    }catch(err){
        cnsole.log("Error While updating Item in router.patch()" , + err);
    }
});

module.exports = router;
