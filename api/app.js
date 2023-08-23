var createError = require('http-errors');
var express = require('express');
const path = require('path');
require('dotenv').config();
require('./helpers/init_mongodb');
var AuthRoute = require("./routes/AuthRoutes");

var app = express();
app.use(express.json());

app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');

app.get('/' , async(req , res , next) =>{
  res.send("Hello From Express!!");
});

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

app.listen(PORT , ()=>{
  console.log(`Server Running on port ${PORT}`);
});


module.exports = app;
