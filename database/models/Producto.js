const { DataTypes } = require('sequelize/types');
const modelos= require('../models');



module.exports=(sequelize,DataTypes)=>{
    const Producto=sequelize.define ('Productos',
    {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER(11)
        },
        nombre:{
            allowNull:false,
            type:DataTypes.STRING(30)
        },
        descripcion:{
            allowNull:false,
            type:DataTypes.TEXT
        },
        fotos:{
            allowNull:false,
            type:DataTypes.STRING(100)
        },
        precio:{
            allowNull:false,
            type:DataTypes.INTEGER
        },
        marca:{
            allowNull:false,
            type:DataTypes.STRING(20)
        }
    },
    { timestamps:false});
    return Producto;
};

Producto.associate= function(modelos){
    const Usuario=modelos.Usuario;
    const Categoria=modelos.Categoria;
    const Color=modelos.Color;
    
    Producto.belongsTo(Usuario,{
        as:"usuario",
        foreignKey:"usuario_id",
        onDelete: 'CASCADE',
        onUpdate:'CASCADE'
    });
    

    Producto.belongsTo(Categoria,{
        as:"categoria",
        foreignKey:"categoria_id",
        onDelete: 'CASCADE',
        onUpdate:'CASCADE'
    });
    

    Producto.belongsToMany(Color, { 
        as: 'colores', 
        foreignKey: 'producto_id',
        otherKey:'color_id',
        through: 'producto-color',
        timestamps:false,
        onDelete: 'CASCADE',
        onUpdate:'CASCADE' 
    });
    
}
