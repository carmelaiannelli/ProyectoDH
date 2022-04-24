var express = require('express');
var router = express.Router();
var mainController =require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.root);
router.get('/contactUs', mainController.contactUs);
router.get('/checkout', mainController.checkOut);

module.exports = router;
