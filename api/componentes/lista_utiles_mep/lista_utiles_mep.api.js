'use strict';
const modelo_lista_utiles_mep=require('./lista_utiles_mep.model');

module.exports.registrar=(req,res)=>{
    let nueva_lista_utiles_mep=new modelo_lista_utiles_mep(
        {
            id_utiles: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            nombre_util: req.body.nombre_util,
            cantidad: req.body.cantidad,
            descripcion: req.body.descripcion
        }
    );

    nueva_lista_utiles_mep.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la lista de útiles del MEP , ha ocurrido el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success: true,
                    msg:`Se envió correctamente la lista de útiles del MEP.`
                }
            );
        }
    });
};

module.exports.listar_utiles_mep=(req,res)=>{
    modelo_lista_utiles_mep.find().then(
        function(lista_utiles_mep){
            if (lista_utiles_mep.length > 0) {
                res.json(
                    {
                        success:true,
                        lista_utiles_mep: lista_utiles_mep
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        lista_utiles_mep: 'No se encontró la lista de útiles del MEP.'
                    }
                )
            }
        }
    )};