//const modelos= require('../models');

module.exports=(sequelize,DataTypes)=>{
    
    const alias='Categoria'
    const column= {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER(100)
        },
        nombre:{
            allowNull:false,
            type:DataTypes.STRING(30)
        }
    };
    const opc= { timestamps:false};


    const Categoria= sequelize.define(alias,column,opc);

   
    // Categoria.associate=function(models){ //ese models es un cb predefinido y le puedo poner milanesa si quiero?
    //     const Producto=models.Producto;
    
    //     Categoria.hasMany(Producto, {
    //         foreignKey:'categoria_id',
    //         as: 'productos'
    //     });
    // };
    
    return Categoria;

};
