const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017' , {dbName : "auth_tutorial"})
.then(() => {
    console.log('mongoDb Connected...');
})
.catch((err) => console.log(`Error Occured... ${err}`));

