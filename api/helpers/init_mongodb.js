const mongoose = require('mongoose');

// const url = "mongodb+srv://dm_37:97k4Ldb3XHQHCs5I@cluster0.ifo1imp.mongodb.net/";


// mongoose.connect(url, { useNewUrlParser: true })
mongoose.connect(process.env.MONGODB_URI , {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
})//Returns Promise
.then(() => {
    console.log('mongoDb Connected...');
})
.catch((err) => console.log(`Error Occured... ${err}`));

mongoose.connection.on('connected' , ()=>{
    console.log('Mongoose Connected to DB');
})
mongoose.connection.on('error' , (err) => {
    console.log(err.message);
})

mongoose.connection.on('disconnected' , ()=>{
    console.log("Mongoose Connection is disconnected...");
})

process.on('SIGINT' , async ()=>{
    await mongoose.connection.close();
    process.exit(0);
})

