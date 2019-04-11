'use strict';
const modelo_criterio = require('./registrar_criterios.model');
module.exports.registrar_criterio = (req, res) => {
    let nuevo_criterio = new modelo_criterio(
        {
            criterio: req.body.criterio,
            criterio2: req.body.criterio2,
            criterio3: req.body.criterio3,
            criterio4: req.body.criterio4,
            criterio5: req.body.criterio5,
            porcentaje: req.body.porcentaje,
            porcentaje2: req.body.porcentaje2,
            porcentaje3: req.body.porcentaje3,
            porcentaje4: req.body.porcentaje4,
            porcentaje5: req.body.porcentaje5
        }
    )
    nuevo_criterio.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `El criterio de evaluación no ha sido registrado correctamente`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `la información del criterio de evaluación fue registrada correctamente`

                }
            )
        }
    }
    );
};
module.exports.listar_criterio = (req, res) => {
    modelo_criterio.find().then(
        function (criterio) {
            if (criterio.length > 0) {
                res.json(
                    {
                        success: true,
                        criterio: criterio
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        msg: `El criterio de evaluación no ha sido registrado correctamente`
                    }
                );
            }
        }
    )
};