
module.exports=(sequelize,DataTypes)=>{

    const alias= 'Usuario';
    const columns={
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER(11)
        },
        username:{
            allowNull:false,
            type:DataTypes.STRING(30),
            unique:true
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
            type:DataTypes.STRING(100),
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
            type:DataTypes.STRING(200)
        },
        password:{
            allowNull:false,
            type:DataTypes.STRING(200)
        }
        
    };

    const opc={ timestamps:false};


    const Usuario=sequelize.define(alias,columns,opc);
    
    
    // Usuario.associate=function(models){
    //     const Producto=models.Producto;
    
    //     Usuario.hasMany(Producto,{
    //         as:"productos",
    //         foreignKey:"usuario_id",
    //         onDelete: 'CASCADE',
    //         onUpdate:'CASCADE'
    //     });
    // };
    
    
    return Usuario;
};
