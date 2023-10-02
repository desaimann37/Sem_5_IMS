const db = require('mongoose');
const details_product = db.Schema({

    product_id: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },

});

module.exports = db.model('ProductDetailsSchema' , details_product);