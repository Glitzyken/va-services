const express = require('express');
const mazinoController = require('../controllers/mazinoController');

const router = express.Router();

router.post('/', mazinoController.sendMailToMazino);

module.exports = router;
