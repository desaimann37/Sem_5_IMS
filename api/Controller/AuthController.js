const User = require("../Models/User");

//Handle errors : 
const handleErrors = (err) => {
    console.log(err.message , err.code);
    let errors = {email: '' , password: ''};

    //duplicate error code
    if(err.code === 11000){
        errors.email = 'That email is already registered!';
        return errors;
    }

    //Validation Errors
    if(err.message.includes('ims validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;//This error object will be converted to json and displayed over console of postman
};


module.exports.signup_get = (req , res) => {
    res.render('signup');
}

module.exports.login_get = (req , res) => {
    res.render('login');
}

module.exports.signup_post = async (req , res) => {
    const {email , password} = req.body;
    try{
        const user = await User.create({email , password});
        res.status(201).json(user);
    }catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

module.exports.login_post = async (req , res) => {
    const {email , password} = req.body;
    console.log(email);
    console.log(password);
    res.send('user login');
}
