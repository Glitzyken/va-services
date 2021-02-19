const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

exports.sendBookingMail = (sender, recipient, cb) => {
  const mailOption = {
    from: sender,
    to: recipient,
    subject: 'New Makeup/Makeover Appointment',
    text: 'These are my booking details.',
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
