const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const pug = require('pug');
const dotenv = require('dotenv');

/*
{name: "Kenneth Jimmy", email: "kenjimmy17@gmail.com", number: "08139113069", date: "2021-03-17", time: "19:09"}
*/

dotenv.config({ path: './config.env' });

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

exports.sendBookingMail = (
  name,
  senderEmail,
  number,
  date,
  time,
  recipient,
  cb
) => {
  const html = pug.renderFile(`${__dirname}/../views/mazinoEmail.pug`, {
    name,
    email: senderEmail,
    number,
    date,
    time,
  });

  const mailOption = {
    from: senderEmail,
    to: recipient,
    subject: 'You Have A New Makeover Appointment Booking',
    html,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

exports.sendContactMail = (
  sender,
  senderEmail,
  client,
  recipientEmail,
  message,
  cb
) => {
  const mailOption = {
    from: senderEmail,
    to: recipientEmail,
    subject: `New Message By ${sender} From ${client}`,
    text: message,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
