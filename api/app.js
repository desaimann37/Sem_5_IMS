var createError = require('http-errors');
var express = require('express');
require('dotenv').config();
require('./helpers/init_mongodb');
var morgan = require('morgan');
var AuthRoute = require("./routes/Auth.route");


var app = express();
app.use(morgan('dev'))


app.get('/' , async(req , res , next) =>{
  res.send("Hello From Express!!");
});

app.use('/auth' , AuthRoute);

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

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
  console.log(`Server Running on port ${PORT}`);
});


module.exports = app;
