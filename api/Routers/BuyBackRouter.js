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



module.exports = router;
