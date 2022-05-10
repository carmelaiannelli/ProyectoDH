const db = require("../database/models");

module.exports={
    root: (req,res)=>{
        if (!req.session.usuario){
            res.render('index')
        } else {
            db.Usuario.findByPk(req.session.usuario)
            .then(usuario=>{
                res.render('users/homePage', {user:usuario})
            })
            
        }
    },
    contactUs: (req,res)=>{
        if (!req.session.usuario){
            res.render('contactUs');
        } else {
            res.render('users/contactUsL')
        }
    },
    checkOut:(req,res)=>{
        res.render('shoppingCart');
    }
};

