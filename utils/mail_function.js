const nodemailer = require('nodemailer');

function sendMail(sendTo, subject, text){

    var mailOptions = {
        from: "mail.virnuse@gmail.com",
        to : sendTo,
        subject :subject,
        html : text
    };

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "mail.virnuse@gmail.com",
            pass: "zwtcwzoucnxzjnem"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    transporter.sendMail(mailOptions, (err, info)=>{
            if(err){
                console.log(err);
            }else{
                console.log('Email Sent!' + info.response);
            }
    });  
};

module.exports = sendMail;