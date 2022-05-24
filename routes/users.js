var express = require('express');
var router = express.Router();
const db = require('../database/models');

const users=require('../controllers/usersController');
const {body}=require('express-validator');
const path=require('path');

// ---------------------------- validaciones -----------------------------------//

const validacionRegistro=[
   body('name')
      .isString()
      .isLength({ min: 2 })
      .notEmpty()
      .withMessage('debe tener minimo 2 caracteres')
   ,

   body('lastName')
      .isString()
      .isLength({ min: 2 })
      .notEmpty()
      .withMessage('debe tener minimo 2 caracteres')
   ,

   body('username', 'el usuario debe tener minimo 5 caracteres')
      .isString()
      .isLength({ min: 5 })
      .notEmpty()
      .custom((usuarioUnico, {req})=>{
         return db.Usuario.findOne({
            where: {username: req.body.username }
         })
         .then((user)=>{
            if (user){
               return Promise.reject('USERNAME en uso');
            }
            })
         })
   ,

   body('email')
      .isEmail()
      .notEmpty()
      .custom((emailUnico, {req})=>{
         return db.Usuario.findOne({
            where: {email: req.body.email }
         })
         .then((user)=>{
            if (user){
               return Promise.reject('E-mail en uso');
            }
            })
      })
   ,
   
   body('password')
      .notEmpty()
      .isLength({ min: 8 })
      .withMessage('la contraseña debe tener minimo 8 caracteres y simbolos especiales')
      // .custom(value=>{
      //    let passwordVerif= ['!','@','#','$','%','^','&','*','(',')','-','_'];
      //    return value.includes(passwordVerif);
      // })
      
      // use .isStrongPassword pero no me acepta las contraseñas,asi que por ahora lo comento. despues use eso que deje ahi pero no anda
   
      ,

   body('avatar')
      .custom((value,{req})=>{
         let file=req.file.originalname;
         
         let extensionesPermitidas=[".jpg",".png",".JPEG",".GIF"];
         let extensionArchivo= path.extname(file);
         
         if( extensionArchivo.includes(!extensionesPermitidas)){
            throw new Error('formato invalido')
         }
      })

];



//----------------------------------------------------------------------------//




//-------------------------------    MULTER   -------------------------------//
const multer = require('multer');
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatarsUsers'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
const uploadFile = multer({ storage });
//---------------------------------------------------------------------------//


/*  users services. */

// registro del usuario
router.get('/signup', users.signUp);
router.post('/newUser', uploadFile.single('avatar'),validacionRegistro, users.newUser);

// login de usuario
router.get('/login', users.login);
router.post('/loggedIn', users.loggedIn);


// verificador session p/control
router.get('/mostrarSession',(req,res)=>{
   res.send('mi numero de session es '+ req.session.usuario)
})

// cierre de sesion de usuario
router.get('/logout', users.logout);






module.exports = router;
