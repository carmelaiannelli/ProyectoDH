const { body } = require('express-validator');
const db = require('../database/models');
const Op= db.Sequelize.Op;

module.exports={
    all: (req,res)=>{
        db.Producto.findAll()
        .then(products => {
        if (req.session.usuario){
            res.render('productsLogged/allProductsL', {products})
        } else {
            res.render('products/allProducts',{products})
        }
        })
        //res.render('products/allProducts',{products});
    },
    add:(req,res)=>{
        if (req.session.usuario){
            res.render('productsLogged/newProduct');
        } else{
            res.redirect('/products')
        }
    },
    create:(req,res)=>{
        //res.render('products/newProduct');
        if (req.session.usuario){
            
            db.Producto.create({
                nombre:req.body.productName,
                usuario_id:req.session.usuario,
                categoria_id:req.body.productCat,
                descripcion:req.body.productDescription,
                foto:req.file.filename,
                marca:req.body.brand,
                precio:req.body.productPrice
            })
            // .then(product=>{
            //     res.redirect('/products/'+product.id)
            // })
        }
    },
    detail: (req,res)=>{
        db.Producto.findByPk(req.params.id)
        .then(product=>{
            if (req.session.usuario){
                res.render('productsLogged/productDetailL', {product})
            } else {
            res.render('products/productDetail',{product});
            }
        });
    },
    edit:(req,res)=>{
        if (req.session.usuario){
            db.Producto.findByPk(req.params.id)
            .then(product=>{
                res.render('productsLogged/editProduct',{product});
            })
        } else {
            res.redirect('/products/'+req.params.id)
        }
        
    },
    update:(req,res)=>{
        if (req.session.usuario){
            db.Producto.update({
                nombre:req.body.productName,
                descripcion:req.body.productDescription,
                //foto: req.file.filename,
                marca:req.body.brand,
                precio:req.body.productPrice
                },
                {
                where: {
                id: req.params.id
                }
            });
        //aca no se como hacer para autollenar los campos incompletos
        res.redirect('/products/'+req.params.id)
        }
    },
    delete:(req,res)=>{
        if (req.session.usuario){
            db.Producto.destroy({
                where: {id: req.params.id}
            })
            .then(producto=>{
                res.redirect('/products')
            })
        } else {
            res.redirect('/products/'+req.params.id)
        }
    //como hago que se borren las fotos de mi hd?
        
    },
    search: (req,res)=>{
        db.Producto.findAll({
            where: 
                {nombre: {[Op.like]:'%'+ req.query.search+'%'}
            }}
        )
        .then(function(resultados) {
            if (!req.session.usuario){
                res.render("products/resultadosBusqueda", {products:resultados})
            } else{
                res.render("productsLogged/resultadosBusquedaL", {products:resultados})
            }
        })
    }
};
