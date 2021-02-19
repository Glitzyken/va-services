const express = require('express');
const mazinoController = require('../controllers/mazinoController');

const router = express.Router();

router.post('/book', mazinoController.createBooking);
router.post('/message', mazinoController.sendContactUsMail);

module.exports = router;
