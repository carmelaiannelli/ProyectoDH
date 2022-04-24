var products=require('../Data/listadoProductos')
const db=require('../database/models');

module.exports={
    all: (req,res)=>{
        res.render('products/allProducts',{products});
    },
    add:(req,res)=>{
        res.render('products/newProduct');
    },
    /*create:(req,res)=>{
        db.Productos.create({
            nombre:req.body.productName,
            decripcion:req.body.productDescription,
            //fotos,
            marca:req.body.brand,
            precio:req.body.productPrice
        })

    },*/
    detail: (req,res)=>{
        let product= products.find(product=>product.id==req.params.id);
        res.render('products/productDetail',{product});
    },
    edit:(req,res)=>{
        let product= products.find(product=>product.id==req.params.id);
        res.render('products/editProduct',{product});
    },
    update:(req,res)=>{
        res.redirect('/products/')//cuando tenga db, redireccionar al mismo producto
    }
};
