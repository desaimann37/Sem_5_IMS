const db = require('mongoose');
const details_admin = db.Schema({

    admin_id: {
        type: String,
        required: true,
    },
    admin_name: {
        type: String,
        required: true,
    }


});

module.exports = db.model('AdminDetailsSchema' , details_admin);