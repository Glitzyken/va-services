const express = require('express');
const ipaController = require('../controllers/ipaController');

const router = express.Router();

router.post('/new-tip', ipaController.createNewTip);
router.get('/all-tips', ipaController.getAllTips);
router.get('/random-tip', ipaController.getRandomTips);

router.patch('/update-tip/:id', ipaController.updateOneTip);
router.delete('/delete-tip/:id', ipaController.deleteOneTip);

module.exports = router;
