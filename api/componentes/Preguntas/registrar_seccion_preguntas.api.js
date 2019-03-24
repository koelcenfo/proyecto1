'use strict';
const modelo_pregunta = require('./registrar_seccion_preguntas.model');
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