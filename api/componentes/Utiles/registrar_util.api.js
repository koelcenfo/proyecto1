'use strict';
const modelo_util = require('./regitstrar_util.model');
module.exports.registrar_util = (req, res) => {
    let nuevo_util = new modelo_util(
        {
            id_util: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            util: req.body.util,
            descripcion: req.body.descripcion,




        }



    );
    nuevo_util.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el útil`
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
        function (util) {
            if (util.length > 0) {
                res.json(
                    {
                        success: true,
                        util: util
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        msg: `No se ha podido registrar la informacion del útil.`
                    }
                );
            }
        }


    )



};