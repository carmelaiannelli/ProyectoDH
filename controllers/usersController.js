const db = require('../database/models');

var bcrypt = require('bcryptjs');


module.exports={
    homeLogged:(req,res)=>{
        res.render('users/homePage');
    },
    contactUs: (req,res)=>{
        res.send('aca la vista');
    },
    signUp: (req,res)=>{
        if (!req.session.usuario){
            res.render('users/signUp');
        } else {
            res.send('ya estas registrado')
        }
    },
    newUser:(req,res)=>{

        db.Usuario.create({
            nombre: req.body.name,
            apellido: req.body.lastName,
            username: req.body.username,
            email:req.body.email,
            fechaDeNacimiento:req.body.birthday,
            domicilio:req.body.address,
            avatar:req.file.filename,
            password: bcrypt.hashSync(req.body.password,10)
        })
        // .then(usuario=>{
        //     req.session.usuario=usuario.id
        // }) 
        // ESTO ASI COMO ESTA, NO FUNCIONA. POR QUE? CREATE NO ME LO DEVUELVE CON ID?
        res.redirect('/login')
    }
    ,
    login: (req,res)=>{
        if (!req.session.usuario){
            res.render('users/login');
        } else {
            res.send('ya estas logeado')
        }
    },
    loggedIn:(req,res)=>{
        
        db.Usuario.findOne({
            where:{
                username:req.body.username
            }
        })
        .then(usuario=>{
            if (!usuario){
                res.send('usuario invalido')
            } else{
                let userPw=usuario.password;
                let checkPw=bcrypt.compareSync(req.body.password,userPw);
                if (checkPw){
                    let loginAprobado=true
                    req.session.usuario=usuario.id;
                    res.send('logeado')
                } else {
                    loginAprobado=false
                    res.send('contraseña incorrecta')
                }
            }}
        )
    },

};

