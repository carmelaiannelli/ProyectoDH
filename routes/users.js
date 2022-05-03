var express = require('express');
var router = express.Router();
const users=require('../controllers/usersController');
const path=require('path');

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


/* GET users services. */


router.get('/signup', users.signUp);
router.post('/newUser', uploadFile.single('avatar'),users.newUser);

router.get('/login', users.login);
router.post('/loggedIn', users.loggedIn);

router.get('/mostrarSession',(req,res)=>{
   res.send('mi numero de session es '+ req.session.usuario)
})
router.get('/home',users.homeLogged);

module.exports = router;
