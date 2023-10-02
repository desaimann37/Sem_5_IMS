const mongoose = require('mongoose');

const adminPurchasedSchema = new mongoose.Schema({

    product_name: {
        type: String,
        required: [true, "please enter product Name"],
        lowercase: true,
    },
    qty:{
        type: Number,
        required: [true , "please enter no. of qty of product"],
    }
});


const Admin = mongoose.model('selectedproductdetailsschemas' , adminPurchasedSchema);
module.exports = Admin;
