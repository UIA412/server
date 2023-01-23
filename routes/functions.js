/**
 * Functions for the backend
 * @param {Object} app - Express app
 */
const User = require('../models/user.model');
const Building = require('../models/building');

// Mail Imports
const sendMail = require('../utils/mail_function');
const registeringMail = require('../utils/registeration_mail/content');
const mail = require('../utils/registeration_mail/content');


async function saveOrUpdateUsers(req) {
    const user = req.body.user;
    // Find if users exists in the database or we need to create a new one
    const existing = await User.findOne({ email : user.email });
    if(existing){
        // Update the user
        existing.username = user.username;
        existing.name = user.name;
        existing.email = user.email;
        existing.building = user.building;
        existing.password = user.password;
        existing.updatedAt = new Date();
        const resp = await existing.save();
        if(resp){
            const OTP = generateOtp(resp._id);
            if(OTP){


            }else{
                console.log('Error while generating OTP');
            }
            return resp;
        }else{
            return null;
        }
    } else {
        // Create a new user
        const newUser = new User({
            username: user.username,
            name: user.name,
            email: user.email,
            building: user.building,
            password: user.password,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        const response =  await newUser.save();
        if(response){
            return response;
        }else{
            return null;
        }
    }
};

function checkIfUserExists(email){
    const resp =  User.findOne({ email : email });
    if(resp){
        return resp._id;
    }else{
        return null;
    }
}


async function signInSaveByGoogle(userProfile){
    const email = userProfile.emails[0].value;
    const ID = checkIfUserExists(email);
    if(ID){
        console.log('User already exists');
        const res = await User.findById(ID);
        return res;
    }else{
        console.log('User does not exists');
        const existing = await User({
                googleId: userProfile.id,
                signedInByGoogle: true,
                username: userProfile.emails[0].value,
                password: userProfile.id,
                name: userProfile.displayName,
                email: userProfile.emails[0].value,
                createdAt: new Date(),
                updatedAt: new Date(),
        });
        const response = await existing.save();
        console.log(response);
        if(response){
            registeringMail(userProfile.emails[0].value);
            return response;
        }else{
            return null;
        }
    }
};

function generateOtp(_id){
    const otp = Math.floor(100000 + Math.random() * 900000);
    const resp = User.findByIdAndUpdate(_id, { otp: otp, tokenExpiration: new Date() });
    if(resp){
        return otp;
    }else{
        return null;
    }
}



module.exports = {
    saveOrUpdateUsers,
    signInSaveByGoogle,
    checkIfUserExists,
}