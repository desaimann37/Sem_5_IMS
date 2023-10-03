var createError = require('http-errors');
var express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./helpers/init_mongodb');
var AuthRoute = require("./routes/AuthRoutes");
const multer = require('multer');
const fs = require('fs');
var app = express();


app.use(express.json());
app.use(cors());
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(AuthRoute);

//Cookies :
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
//Storing PDF/JSON File : 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    const uploadDir = './uploads/';
    // Create the 'uploads' directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Use a unique name for the uploaded file
    cb(null, `${Date.now()}-${file.originalname}`);
  },

});

const upload = multer({ storage });

app.post('/file/upload' , upload.single('file') , (req , res)=>{

  if(req.file){
    const filePath = req.file.path;
    console.log(filePath);
    res.status(200).json({ message: 'File uploaded successfully ' , filePath });
  }else{
    res.status(400).json({ message : 'No file uploaded!!' });
  }
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
