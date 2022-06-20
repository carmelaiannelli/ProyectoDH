var express = require('express');
var router = express.Router();
var products=require('../controllers/productsController');

const {body}=require('express-validator');
const path=require('path');

// ---------------------------- validaciones -----------------------------------//

const validacionPto=[

   body('productName')
      .notEmpty().withMessage('el campo debe estar completo').bail()
      .isString().withMessage('debe tener minimo 5 caracteres').bail()
      .isLength({ min: 5 }).withMessage('debe tener minimo 5 caracteres')
      
      
   ,

   body('productDescription')      
      .isLength({ min: 20 })
      .withMessage('debe tener minimo 20 caracteres')
   ,
   body('productPic')
      .custom((value,{req})=>{
         let file=req.file.originalname;
      
         let extensionArchivo= (path.extname(file)).toLowerCase();
         
         let extensionAUsar= extensionArchivo.toString();

         if (extensionAUsar == '.jpeg' || extensionAUsar == '.gif' || extensionAUsar == '.jpg' || extensionAUsar == '.png'){
            return true 
         } else {
            throw new Error('img format is incorrect');
         }
         
      })
];



//---------------------------------------------------------------------------//



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
router.post('/products/create',uploadFile.single('productPic'),validacionPto, products.create);


//aca en el post falta un express validator para los datos; puedo validar por front
router.get('/products/:id', products.detail);

router.get('/products/:id/edit', products.edit);
router.put('/products/:id/update',uploadFile.single('productPic'), products.update);

//delete product
router.delete("/products/:id/delete",products.delete);



module.exports = router;