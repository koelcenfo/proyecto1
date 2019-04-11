'use strict';
const modelo_informacion=require('./informacion.model');

module.exports.registrar=(req,res)=>{
    let nueva_informacion=new modelo_informacion(
        {
            id_informacion: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            reglamento: req.body.reglamento,
            proceso_matricula: req.body.proceso_matricula,
            sistema_evaluacion: req.body.sistema_evaluacion,
            recomendaciones: req.body.recomendaciones,
            areas_informativas: req.body.areas_informativas,
            seccion_ayuda: req.body.seccion_ayuda,
            talleres_adicionales: req.body.talleres_adicionales,
            deportes: req.body.deportes,
            informacion_adicional: req.body.informacion_adicional
        }
    );

    nueva_informacion.save(function(error){
        if (error) {
            res.json(
                {
                    success:false,
                    msg:`No se pudo regitrar el material informativo, ha ocurrido el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se envió correctamente el material informativo.`
                }
            );
        }

    });
};

module.exports.listar_informacion=(req,res)=>{
    modelo_informacion.find().then(
        function(informacion){
            if (informacion.length>0) {
                res.json(
                    {
                        success: true,
                        informacion: informacion
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        informacion: 'No se encontró el material informativo.'
                    }
                )
            }
        }
    )};
