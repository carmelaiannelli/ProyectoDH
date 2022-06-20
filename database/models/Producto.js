// const modelos= require('../models');
module.exports=(sequelize,DataTypes)=>{
    const alias= "Producto";
    const columns= {
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
        foto:{
            type:DataTypes.STRING(300)
        },
        precio:{
            allowNull:false,
            type:DataTypes.INTEGER
        },
        marca:{
            allowNull:false,
            type:DataTypes.STRING(20)
        }
    };
    const opc= { timestamps:false}
    
    const Producto=sequelize.define (alias, columns, opc);

    Producto.associate = function (models) {

        Producto.belongsToMany(models.Color, { 
            as: 'colores', 
            foreignKey: 'producto_id',
            otherKey:'color_id',
            through: 'producto-color',
            timestamps:false,
            // onDelete: 'CASCADE',
            // onUpdate:'CASCADE' 
        });
     //esto me rompe el codigo porque no le puse las variables creo

        Producto.belongsTo(models.Usuario, {
        as:"usuario",
        foreignKey:"usuario_id",
        onDelete: 'CASCADE',
        onUpdate:'CASCADE'
        });

        Producto.belongsTo(models.Categoria, {
        as:"categorias",
        foreignKey:"categoria_id",
        // onDelete: 'CASCADE',
        // onUpdate:'CASCADE'
        });
        
       
    };
        
   
    return Producto;
};



