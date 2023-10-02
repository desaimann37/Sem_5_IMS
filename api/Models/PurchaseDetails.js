const db = require('mongoose');
const details_purchase = db.Schema({

    product_id: {
        type: String,
        required: true,
    },
    purchase_id: {
        type: String,
        required: true,
    },
    product_name:{
        type: String,
        required: true,
    },
    vendor_name:{
        type: String,
        required: true,
    },
    date_time:{
        type: Date,
        required: true,
    },
    admin_name:{
        type: String,
        required: true,
    },

});

module.exports = db.model('PurchaseDetailsSchema' , details_purchase);