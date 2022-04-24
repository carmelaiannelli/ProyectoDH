module.exports={
    all: (req,res)=>{
        res.render('products/allServices')
    },
    service1: (req,res)=>{
        res.render('products/service1');
    },
    service2:(req,res)=>{
        res.render('products/service2');
    }
};