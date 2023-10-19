const db = require('mongoose');

const buyBackSchema = new db.Schema({

    buy_back_id:{
        type: String,
        required: true,
    },
    date:{          //To Maintain History if Admin Wants to buy those products Again!!
        type: Date,
        required: true,
    },
    product_name:{
        type: String,
        required: true,
    },
    qty:{
        type:String,
        required: true,
    },
});

module.exports = db.model('buyBackDetailsSchema' , buyBackSchema);

