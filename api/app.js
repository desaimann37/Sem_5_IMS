var createError = require('http-errors');
var express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./helpers/init_mongodb');
var AuthRoute = require("./routes/AuthRoutes");

var app = express();


app.use(express.json());
app.use(cors());
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(AuthRoute);

//Cookies
app.get('/set-cookies' , (req , res) => {
  // res.setHeader('Set-Cookie' , 'newUser=true');
  res.cookie('newUser' , false , {maxAge: 1000*60*60*24 , httpOnly:true});
  res.send('You got Cookies!');
});

app.get('/read-cookies' , (req , res)=>{

  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);

});

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
