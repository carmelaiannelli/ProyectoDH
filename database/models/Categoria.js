//const modelos= require('../models');

module.exports=(sequelize,DataTypes)=>{
    
    const alias="Categoria";
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
    const opc= { timestamps:false, tableName:'categorias'};


    const Categoria= sequelize.define(alias,column,opc);

   
    Categoria.associate=function(models){ 
        Categoria.hasMany(models.Producto, {
            foreignKey:'categoria_id',
            as: 'productos'
        });
    };
    
    return Categoria;

};
