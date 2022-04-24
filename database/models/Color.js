const { DataTypes } = require('sequelize/types');

const modelos= require('../models');

module.exports=(sequelize,DataTypes)=>{
    const Color= sequelize.define('Colores',
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
    return Color;

};

Color.associate=function(modelos){
    const Producto=modelos.Producto;

    Color.belongsToMany(Producto, { 
        as: 'productos', 
        foreignKey: 'color_id',
        otherKey:'producto_id',
        through: 'producto-color',
        timestamps:false,
        onDelete: 'CASCADE',
        onUpdate:'CASCADE' 
    });
};