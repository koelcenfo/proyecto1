'use strict';
const modelo_util = require('./regitstrar_util.model');
module.exports.registrar = (req, res) => {
    let nuevo_util = new modelo_util(
        {
            id_nivel: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            nivel:req.body.nivel,
            util1: req.body.util1,
            util2: req.body.util2,
            util3: req.body.util3,
            util4: req.body.util4,
            util5: req.body.util5,
            util6: req.body.util6,
            util7: req.body.util7,
            util8: req.body.util8,
            util9: req.body.util9,
            util10: req.body.util10,
            descripcion1: req.body.descripcion1,
            descripcion2: req.body.descripcion2,
            descripcion3: req.body.descripcion3,
            descripcion4: req.body.descripcion4,
            descripcion5: req.body.descripcion5,
            descripcion6: req.body.descripcion6,
            descripcion7: req.body.descripcion7,
            descripcion8: req.body.descripcion8,
            descripcion9: req.body.descripcion9,
            descripcion10: req.body.descripcion10,
            cantidad1: req.body.cantidad1,
            cantidad2: req.body.cantidad2,
            cantidad3: req.body.cantidad3,
            cantidad4: req.body.cantidad4,
            cantidad5: req.body.cantidad5,
            cantidad6: req.body.cantidad6,
            cantidad7: req.body.cantidad7,
            cantidad8: req.body.cantidad8,
            cantidad9: req.body.cantidad9,
            cantidad10: req.body.cantidad10

        }
    );
    nuevo_util.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `no se registro el util ocurrió el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `se envio correctamente el util`
                }
            );
        }
    });


};
module.exports.listar_utiles = (req, res) => {
    modelo_util.find().then(
        function (utiles) {
            if (utiles.length > 0) {
                res.json(
                    {
                        success: true,
                        utiles: utiles
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        utiles: 'No se encontraron utiles'
                    }
                )
            }
        }
    )

};