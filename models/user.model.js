/**
 *  ----- Team VIR - ŊUSĒ -----
 * 
 *  Developed By Kashif Raza
 *  Github: https://github.com/kashif-raza2019
 *  Contact: kashifraza.tech@gmail.com
 */

const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: String,
    email: String,
    name: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    googleId: String,
    signedInByGoogle: { type: Boolean, default: false },
    otp: String,
    token: String,
    tokenExpiration: Date,
});



module.exports = mongoose.model('User', User);