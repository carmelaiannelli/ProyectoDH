const modelos= require('../models');
const { DataTypes } = require('sequelize/types');


const Categoria=(sequelize,DataTypes)=>{
    Categoria=sequelize.define('categorias',
    {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER(100)
        },
        nombre:{
            allowNull:false,
            type:DataTypes.STRING(30)
        }
    },
    { timestamps:false});
    
    return Categoria;

};

Categoria.associate=function(modelos){
    const Producto=modelos.Producto;

    Categoria.hasMany(Producto, {
        foreignKey:'categoria_id',
        as: 'productos'
    });
};