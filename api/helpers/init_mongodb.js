const mongoose = require('mongoose');

const url = "mongodb+srv://Ashish:6tmC5FNA8T5IcDiJ@dms.donboph.mongodb.net/DMS";

mongoose.connect(url, { useNewUrlParser: true })
.then(() => {
    console.log('mongoDb Connected...');
})
.catch((err) => console.log(`Error Occured... ${err}`));

