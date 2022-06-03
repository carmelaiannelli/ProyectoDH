var express = require('express');
var router = express.Router();


const apiProduct=require('../../controllers/APIS/apiProductController');

// todos los productos
router.get('/api/products/', apiProduct.findAll);

// detalle del producto
router.get('/api/products/:id', apiProduct.findOne);



module.exports=router;