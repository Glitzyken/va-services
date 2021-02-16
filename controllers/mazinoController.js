const sendEmail = require('../services/vaMailer');

exports.sendNewBookingMail = (req, res) => {
  console.log('Data:', req.body);

  const recipient = 'zinoakpebe@gmail.com';
  const { email } = req.body;

  sendEmail(email, recipient, (err, data) => {
    if (err) {
      res.status(500).json({
        message: 'Internal Error!',
        data: null,
      });
    } else {
      res.status(201).json({
        message: 'Success.',
        data,
      });
    }
  });
};

exports.sendContactUsMail = (req, res) => {
  res.send('New message!');
};
