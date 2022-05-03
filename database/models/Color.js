//const modelos= require('../models');

module.exports=(sequelize,DataTypes)=>{
    const alias='Color'
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


    const Color= sequelize.define(alias,column,opc);
    
    Color.associate=function(modelos){
        const Producto=modelos.Producto;
    
        Color.belongsToMany(Producto, { 
            as: 'productos', 
            foreignKey: 'color_id',
            otherKey:'producto_id',
            through: 'producto-color',
            timestamps:false,
            // onDelete: 'CASCADE',
            // onUpdate:'CASCADE' 
        });
    };
    
    return Color;

};
