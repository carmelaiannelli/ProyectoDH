module.exports={
    all: (req,res)=>{
        if (!req.session.usuario){
            res.render('products/allServices')
        } else {
            res.render('productsLogged/allServicesL')
        }
    },
    service1: (req,res)=>{
        if (!req.session.usuario){
            res.render('products/service1')
        } else {
            res.render('productsLogged/service1L')
        }
    },
    service2:(req,res)=>{
        if (!req.session.usuario){
            res.render('products/service2')
        } else {
            res.render('productsLogged/service2L')
        }
    }
};