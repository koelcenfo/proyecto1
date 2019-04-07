'use strict';
const modelo_costo = require('./registrar_costo.model');
module.exports.registrar_costos = (req,res) => {
    let nuevo_costo = new modelo_costo(
        {
            nivel: req.body.nivel,
            matricula: req.body.matricula,
            mensualidad: req.body.mensualidad


        }



    );
    nuevo_costo.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `Revise los campos nuevamente.`
                }
            )
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se ha registrado el costo de la matrícula y mensualidad correctamente.`
                }
            );
        }
    }
    );
};
module.exports.listar_costo = (req,res) => {
    modelo_costo.find().then(
        function (costos) {
            if (costos.length > 0) {
                res.json(
                    {
                        success: true,
                        costos: costos
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                    msg: `Revise los campos nuevamente.`
                    }
                )
            }
        }


    );

};
