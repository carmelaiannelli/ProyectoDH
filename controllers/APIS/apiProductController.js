const db = require('../../database/models');
const {body, validationResult}=require('express-validator');

var bcrypt = require('bcryptjs');

module.exports={

    findAll: async(req,res)=>{
        const productos= await db.Producto.findAll(
            {attributes: 
                ['id','nombre','descripcion',["concat('/images/prodImages/',  foto)" , 'foto del producto'], ["concat('/api/products/',  id)" , 'link'],['categoria_id','categoria'] ]
            }
        )
        
        return res.status(200).json({
            total: productos.length,
            data: {productos},
            status: 200
        })

    },         
    // <option value="1">llaves</option>
    // <option value="2">candados</option>
    // <option value="3">cerraduras</option>
    // <option value="4">otro</option>

    findOne: async(req,res)=>{
        const producto= await db.Producto.findByPk(
            req.params.id, 
            {attributes: 
                ['id','nombre','descripcion','precio',["concat('/images/prodImages/',  foto)" , 'foto del producto'],['categoria_id','categoria'], ['usuario_id','usuario'],'marca' ]
            }
            )

        return res.status(200).json({
            data: {producto},
            status: 200
        })
    }


}