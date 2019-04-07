'use strict';
const modelo_util = require('./regitstrar_util.model');
module.exports.registrar_util = (req, res) => {
    let nuevo_util = new modelo_util(
        {
            util: req.body.util,
            descripcion: req.body.descripcion,
            cantidad: req.body.cantidad



        }



    );
    nuevo_util.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `no se pudo registrar el util`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `se ha registrado el util correctamente`
                }
            );
        }
    }
    )

};
module.exports.listar_util = (req, res) => {
    modelo_util.find().then(
        function (utiles) {
            if (utiles.length > 0) {
                res.json(
                    {
                        success: true,
                        utiles: utiles
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        msg: `no se pudo registrar el útil`
                    }
                );
            }
        }


    )



};