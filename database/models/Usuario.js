const { DataTypes } = require('sequelize/types');

const modelos= require('../models');

module.exports=(sequelize,DataTypes)=>{
    const Usuario=sequelize.define('Usuarios',
    {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER(11)
        },
        username:{
            allowNull:false,
            type:DataTypes.STRING(30)
        },
        nombre:{
            allowNull:false,
            type:DataTypes.STRING(15)
        },
        apellido:{
            allowNull:false,
            type:DataTypes.STRING(30)
        },
        email:{
            allowNull:false,
            type:DataTypes.STRING(25),
            unique:true,
            isEmail:true
        },
        fechaDeNacimiento:{
            allowNull:false,
            type:DataTypes.DATEONLY
        },
        domicilio:{
            allowNull:false,
            type:DataTypes.STRING(50)
        },
        avatar:{
            allowNull:false,
            type:DataTypes.STRING(100)
        },
        password:{
            allowNull:false,
            type:DataTypes.STRING(30)
        }
    },
    { timestamps:false});
    return Usuario;
};

Usuario.associate=function(modelos){
    const Producto=modelos.Producto;

    Usuario.hasMany(Producto,{
        as:"productos",
        foreignKey:"usuario_id",
        onDelete: 'CASCADE',
        onUpdate:'CASCADE'
    });
}