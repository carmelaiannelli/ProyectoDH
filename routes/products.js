var express = require('express');
var router = express.Router();
var products=require('../controllers/productsController');
const path=require('path');

//-------------------------------    MULTER   -------------------------------//
const multer = require('multer');
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/prodImages'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
const uploadFile = multer({ storage });
//---------------------------------------------------------------------------//


/* GET home page. */
router.get('/products', products.all);

// no anda si uso /products/buscar. no entiendo por que
router.get("/buscar", products.search);

// Add a new product to the product list
router.get('/products/add', products.add);
router.post('/products/create',uploadFile.single('productPic'), products.create);


//aca en el post falta un express validator para los datos; puedo validar por front
router.get('/products/:id', products.detail);

router.get('/products/:id/edit', products.edit);
router.put('/products/:id/update', products.update);

//delete product
router.delete("/products/:id/delete",products.delete);



module.exports = router;