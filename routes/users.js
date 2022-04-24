var express = require('express');
var router = express.Router();
const users=require('../controllers/usersController');

//multer
const path=require('path');
const multer = require('multer');
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/prodImages'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
const uploadFile = multer({ storage });



/* GET users services. */


router.get('/signup', users.signUp);
router.post('/newUser', uploadFile.single('avatar'),users.newUser);

router.get('/login', users.login);

router.get('/home',users.homeLogged);

module.exports = router;
