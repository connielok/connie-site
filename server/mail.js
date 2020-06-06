const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: 'APIKEY',
    domain: 'DOMAIN',
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, message, cb) => {
  const mailOptions = {
    from: email,
    to: 'conniehlok@gmail.com',
    subject: `Message from ${name} via connielok.com`,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
