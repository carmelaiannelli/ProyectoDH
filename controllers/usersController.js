const db = require('../database/models');
const {body, validationResult}=require('express-validator');

var bcrypt = require('bcryptjs');


module.exports={
    contactUs: (req,res)=>{
        res.send('aca la vista');
    },
    signUp: (req,res)=>{
        if (!req.session.usuario){
            res.render('users/signUp.ejs');

        } else {
            res.send('ya estas registrado')
        }
    },
    newUser:(req,res)=>{
        let errores=validationResult(req)
        if (!errores.isEmpty()){
            res.send (errores)
        } else {
            db.Usuario.create({
                nombre: req.body.name,
                apellido: req.body.lastName,
                username: req.body.username,
                email:req.body.email,
                fechaDeNacimiento:req.body.birthday,
                domicilio:req.body.address,
                password: bcrypt.hashSync(req.body.password,10),
                avatar:req.file.filename
                //no pude hacer andar un default pic
            })
            // .then(usuario=>{
            //     req.session.usuario=usuario.id
            // }) 
            // ESTO ASI COMO ESTA, NO FUNCIONA. POR QUE? CREATE NO ME LO DEVUELVE CON ID?
            res.redirect('/login')
        }
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
                res.redirect('/login')
            } else{
                let userPw=usuario.password;
                let checkPw=bcrypt.compareSync(req.body.password,userPw);
                if (checkPw){
                    let loginAprobado=true
                    req.session.usuario=usuario.id;
                    res.redirect('/')
                } else {
                    loginAprobado=false
                    res.redirect('/login')
                }
            }}
        )
    },
    logout: (req,res)=>{
        if(req.session.usuario){
            req.session.usuario=null
        };
        res.redirect('/');
    }

};

