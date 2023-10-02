const db = require('mongoose');
const details_vendor = db.Schema({

    vendor_id: {
        type: String,
        required: true,
    },
    vendor_name: {
        type: String,
        required: true,
    },
    vendor_mobile:{
        type: String,
        required: true,
    },
    vendor_email:{
        type: String,
        required: true,
    },
    vendor_address: {
        type: String,
        required: true,
    },

});

module.exports = db.model('VendorDetailsSchema' , details_product);