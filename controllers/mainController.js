module.exports={
    root: (req,res)=>{
        res.render('index');
    },
    contactUs: (req,res)=>{
        res.render('contactUs');
    },
    checkOut:(req,res)=>{
        res.render('shoppingCart');
    }
};

