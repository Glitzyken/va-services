const vaMailer = require('../services/vaMailer');

exports.createBooking = (req, res) => {
  // console.log('Data:', req.body);

  const recipient = 'zinoakpebe@gmail.com';
  const { email } = req.body;

  vaMailer.sendBookingMail(email, recipient, (err, data) => {
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
  const client = 'mazinomakeovers.com';
  const recipient = 'zinoakpebe@gmail.com';
  const { name, email, message } = req.body;

  vaMailer.sendContactMail(
    name,
    email,
    client,
    recipient,
    message,
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: 'Internal Error!',
        });
      } else {
        res.status(201).json({
          message: 'Success.',
        });
      }
    }
  );
};
