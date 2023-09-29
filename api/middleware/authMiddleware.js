const jwt = require('jsonwebtoken');

const requireAuth = (req , res , next) => {

    const token = req.cookies.jwt;

    //check jwt exists & is verified
    if(token){
        jwt.verify(token , 'net ninja secret' , (err , decodedToken) => {
            if(err){
                console.log(err.message);
                res.redirect('/login/nav');
            }else{
                console.log(decodedToken);
                next();
            }
        });
    }else{
        res.redirect('/login/nav');
    }

}
module.exports = { requireAuth };









