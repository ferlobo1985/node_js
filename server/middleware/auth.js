const {User} = require('./../models/user');

let auth = (req,res,next) =>{
    const token = req.header('x-token');
    
        User.findByToken(token,(err,user)=>{
            if(err) throw err;
            if(!user) return res.status(400).send()
    
            req.token = token;
            req.user = user;
            next()
        })
}

module.exports = {auth}