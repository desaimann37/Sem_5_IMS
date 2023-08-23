// const {MongoClient} = require('mongodb')
const express = require('express');
const mongoose = require('mongoose');



// const url = "mongodb+srv://dm_37:97k4Ldb3XHQHCs5I@cluster0.ifo1imp.mongodb.net/";
// const client = new MongoClient(url , {useNewUrlParser : true});

const url = "mongodb://127.0.0.1:27017/auth_tutorial";

mongoose.connect(url , {useNewUrlParser : true})
.then(result => console.log('successfully connected to mongodb local instance')).catch(err => console.log(err))



