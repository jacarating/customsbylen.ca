const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();
const app = express();

// const corsOptions = {
//   origin: "*",
//   optionSuccessStatus: 200
// };

// app.use(cors(corsOptions));

// const transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com",
//     secureConnection: false,
//     port: 587,
//     auth: {
//       user: "user@outlook.com",
//       pass: "password"
//     }
//   });

//   transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

//   app.post('/send', (req, res, next) => {
//     var fname = req.body.fname;
//     var lname = req.body.lname;
//     var email = req.body.email;
//     var message = req.body.message;
  
//     var mail = {
//       from: email,
//       to: "jacarating@myseneca.ca",
//       subject: fname + " " + lname + " has sent you a message from lenscustoms.ca!",
//       message: message
//     }
  
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           status: 'fail'
//         })
//       } else {
//         res.json({
//          status: 'success'
//         })
//       }
//     })
//   })
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(cors());


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post('/api/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message

  var mail = {
    from: name,
    to: "jcarating@gmail.com",
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});