'use strict'
const modelo_becas=require('./becas.model');

module.exports.registrar=(req,res)=>{
    let nueva_beca=new modelo_becas(
        {
            id_becas:req.body.ObjectId,
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            descripcion:req.body.descripcion
        }
    );

    nueva_beca.save(function(error){
        if(error){
            res.json({
                success:false,
                msg: `No se pudo registrar la beca, ha ocurrido el siguiente error ${error}`
            });
        }else{
            res.json({
                success:true,
                msg: `Se envió correctamente la nueva beca.`
            });
        }
    });
};
module.exports.listar_beca=(req,res) =>{
    modelo_becas.find().then(
        function(becas){
            if(becas.length > 0){
                res.json(
                    {
                        success: true,
                        becas : becas
                    }
                )
            }else{
                res.json(
                    {
                    success: false,
                    becas: `No se encontró ninguna beca.`
                    }
                )
            }
        }
    )};