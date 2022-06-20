var express = require('express');
var router = express.Router();


const apiUsers=require('../../controllers/APIS/apisUserController');



// retorna todos los usuarios
router.get('/api/users',apiUsers.findAll);

//retorna datos del usuario consultado
router.get('/api/users/:id', apiUsers.findOne);

//usuarios con productos

router.get('/api/usersC', apiUsers.userComplete);

module.exports = router;