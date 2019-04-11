'use strict'

const model_idioma = require ('./idiomas.model');

module.exports.registrar_idioma = (req, res) => {
    let nuevo_idioma = new model_idioma({
        idioma_id : req.body.ObjectId,
        idiomas : req.body.idiomas
    });
    nuevo_idioma.save(function(error){
        if(error){
                res.json({
                    success : false,
                    msg : `No se pudo registrar el idioma, ocurrio el siguiente error ${error}`
                }
                );
        }else{
                res.json({
                    success : true,
                    msg : `Se registro satisfactoriamente el idioma.`
                });
        }
    });
};