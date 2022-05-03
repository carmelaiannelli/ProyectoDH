const db = require('../database/models');


module.exports={
    all: (req,res)=>{
        db.Producto.findAll()
        .then(products => {
            res.render('products/allProducts',{products});
        })
        //res.render('products/allProducts',{products});
    },
    add:(req,res)=>{
        res.render('products/newProduct');
    },
    create:(req,res)=>{
        //res.render('products/newProduct');
        
        db.Producto.create({
            nombre:req.body.productName,
            usuario_id:1,
            categoria_id:1,
            descripcion:req.body.productDescription,
            foto:req.file.filename,
            marca:req.body.brand,
            precio:req.body.productPrice
        })
        .then(product=>{
            res.redirect('/products/'+product.id)
        })

    },
    detail: (req,res)=>{
        db.Producto.findByPk(req.params.id)
        .then(product=>{
            res.render('products/productDetail',{product});
        });
    },
    edit:(req,res)=>{
        db.Producto.findByPk(req.params.id)
        .then(product=>{
            res.render('products/editProduct',{product});
        });
        
    },
    update:(req,res)=>{
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
        res.send(req.file)
        //res.redirect('/products/'+ req.params.id)

    },
    delete:(req,res)=>{
        db.Producto.destroy({
            where: {id: req.params.id}
        });
    //como hago que se borren las fotos de mi hd?
        res.redirect('/products')
    }
};
