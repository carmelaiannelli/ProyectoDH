const db = require('../../database/models');
const {body, validationResult}=require('express-validator');

var bcrypt = require('bcryptjs');


//FALTA PONER TRY - CATCH

module.exports={

    findAll: async(req,res)=>{
        const usuarios= await db.Usuario.findAll({attributes: ['id', 'nombre', 'apellido', ["concat('/api/users/',  id)" , 'link']]})
        return res.status(200).json({
            total: usuarios.length,
            data: {usuarios},
            status: 200
        })

    },         
    findOne: async(req,res)=>{
        const usuario= await db.Usuario.findByPk(
            req.params.id, 
            {attributes: 
                ['id', 'nombre', 'apellido',["concat('/images/avatarsUsers/',  avatar)" , 'foto de perfil']]
            }
            )
        return res.status(200).json({
            data: {usuario},
            status: 200
        })
    },
    userComplete:  async (req, res) => {
        const usuarios= await db.Usuario.findAll(
            { include: [
                {model: db.Producto,
                as:"productos"
            }]
            }
        )
        
        var usuariosFiltrado=[];
        usuarios.forEach(usuario=>{
            usuariosFiltrado.push({
                id:usuario.id,
                username: usuario.username,
                nombre:usuario.nombre,
                apellido: usuario.apellido,
                email:usuario.email,
                avatar:usuario.avatar,
                productos: usuario.productos
            })
        })
    

        return res.status(200).json({
            data: {usuarios:usuariosFiltrado},
            status: 200
        })
    }

}



// √ count → cantidad total de usuarios en la base. 
// √ users → array con la colección de usuarios, cada uno con:
//      XXXXXXXXXXXXX 
//      ● id
//      ● name
//      ● email
//      ● detail → URL para obtener el detalle.