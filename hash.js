const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10,(err,salt)=>{
//     if(err) return next(err);

//     bcrypt.hash('password123',salt,(err,hash)=>{
//         if(err) return next(err);
//         console.log(hash)
//     });

// })


// const secret = 'supersecret';
// const secretSalt = 'lsdjbvlajbfvifabdfadv8'

// var user = {
//     id:1,
//     token:MD5('password123').toString() + secretSalt
// }

// const receivedToken = '482c811da5d5b4bc6d497ffa98491e38lsdjbvlajbfvifabdfadv8'

// if(receivedToken === user.token){
//     console.log('move forward')
// }

let id = "10000";
const secret = 'supersecret';

//const token = jwt.sign(id,secret);

const receivedToken = "eyJhbGciOiJIUzI1NiJ9.MTAwMDA.v46XZTowl3YeHvoQ486peBU7y_xLvf6N5nvTdo2WhsQ"
const decodeToken = jwt.verify(receivedToken,secret) 

console.log(decodeToken)
