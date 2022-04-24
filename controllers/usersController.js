var bcrypt = require('bcryptjs');


module.exports={
    homeLogged:(req,res)=>{
        res.render('users/homePage');
    },
    login: (req,res)=>{
        res.render('users/login');
    },
    signUp: (req,res)=>{
        res.render('users/signUp');
    },
    newUser:(req,res)=>{

        let usuario={
            nombre: req.body.name,
            apellido: req.body.lastName,
            usuario: req.body.username,
            email:req.body.email,
            fechaDeNacimiento:req.body.birthday,
            domicilio:req.body.address,
            avatar:req.file.name,
            password: bcrypt.hashSync(req.body.password,10)
        }
        res.redirect('/home')
    }
};

