'use strict';
const modelo_actividades=require('./actividades.model');

//función registrar la información de la actividad
module.exports.registrar=(req,res)=>{
    let nueva_actividad=new modelo_actividades(
        {
            id_actividades: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            nombre : req.body.nombre,
            fecha : req.body.fecha,
            hora : req.body.hora,
            lugar : req.body.lugar,
            descripcion : req.body.descripcion
        }
    );

    nueva_actividad.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la actividad , ha ocurrido el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success: true,
                    msg:`Se envió correctamente la nueva actividad`
                }
            );
        }
    });
};
//función listar la información de la actividad
module.exports.listar_actividad=(req,res) =>{
    modelo_actividades.find().then(
        function(actividades){
            if(actividades.length > 0){
                res.json(
                    {
                        success: true,
                        actividades: actividades
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        actividades: 'No se encontró la actividad'
                    }
                )
            }
              
        }
    )};