var express = require('express');
var router = express.Router();
var services=require('../controllers/servicesController');

/* GET home page. */
router.get('/servicios', services.all);
router.get('/servicios/1', services.service1);
router.get('/servicios/2', services.service2);


module.exports = router;
