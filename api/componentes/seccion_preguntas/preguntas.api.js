'use strict';
// espacio para Registrar las preguntas

const modelo_pregunta = require('./preguntas.model');
module.exports.registrar = (req, res) => {
    let nueva_pregunta = new modelo_pregunta(
        {
            titulo: req.body.titulo,
            pregunta: req.body.pregunta

        }

    );
    nueva_pregunta.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `no se registro la pregunta`
            });
        } else {
            res.json({
                success: true,
                msg: `se registro la pregunta de manera correcta`
            }
            );
        }
    });

};

module.exports.listar_pregunta=(req,res)=>{
    modelo_pregunta.find().then(
        function(pregunta){
            if (pregunta.length > 0) {
                res.json(
                    {
                        success: true,
                        pregunta:pregunta
                    }
                )
            } else {
                res.json(
                    {
                        success:false,
                        pregunta: 'No se encontraron preguntas'
                    }
                )
            }
        }
    )};