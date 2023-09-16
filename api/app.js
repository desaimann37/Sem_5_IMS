var createError = require('http-errors');
var express = require('express');
const path = require('path');
const cors = require('cors')
require('dotenv').config();
require('./helpers/init_mongodb');
var AuthRoute = require("./routes/AuthRoutes");

var app = express();
app.use(express.json());
app.use(cors());
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');

app.get('/' , async(req , res , next) =>{
  res.send("Hello From Express!!");
});

/*
  Testing Backend data Fetched to display on frontend?
*/
const items = ['Item1' , 'Item2' , 'Item3'];


app.use(AuthRoute);

app.use(async (req , res , next)=>{
  next(createError.NotFound());/* npm Package is there called http-errors*/
});

app.use((err , req , res , next)=>{
  res.status(err.status || 500)
  res.send({
    error:{
      status : err.status || 500,
      message : err.message,
    }
  })
})

const PORT = process.env.PORT || 9000;

app.get('/' , (req , res)=>{
  res.json(items);
});

app.listen(PORT , ()=>{
  console.log(`Server Running on port ${PORT}`);
});


module.exports = app;
