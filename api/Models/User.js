const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: [true , 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail , 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: [true , 'Please enter a password'],
        minLength: [7 , 'Minimum password length is 7 characters'],
    },
});


//fire a function before document saved to db
userSchema.pre('save' , async function(next){
    // console.log('user is about to be created & saved' , this);//this--> refers to instance of User in Schema 
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password , salt);
    next();
});

//fire a function after document saved to db
userSchema.post('save' , function(doc , next){
    console.log('new user was created & saved' , doc);
    next();
});

//static method to login user:
userSchema.statics.login = async function(email , password){
    const user = await this.findOne({ email });
    if(user){
        //Compare Hashed passwords bcz user exist...
        const auth = await bcrypt.compare(password , user.password);
        if(auth){
            //Passwords matched : 
            return user;
        }
        throw Error('incorrect password!');
    }
    throw Error('incorrect email!');
}
const User = mongoose.model('ims' , userSchema);
module.exports = User;


