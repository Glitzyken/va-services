const vaMailer = require('../services/vaMailer');

exports.sendBookingMail = (req, res) => {
  const recipient = 'zinoakpebe@gmail.com';
  const { name, email, number, date, time } = req.body;

  vaMailer.sendBookingMail(
    name,
    email,
    number,
    date,
    time,
    recipient,
    (err, data) => {
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
    }
  );
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
