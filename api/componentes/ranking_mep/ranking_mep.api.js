'use strict';
const modelo_ranking = require('./ranking_mep.model');

/*Funcion 1 Nos permite registrar los datos*/
module.exports.registrar = (req, res) => {
    let nuevo_ranking = new modelo_ranking(
        {
            puesto1 : req.body.puesto1,
            puesto2 : req.body.puesto2,
            puesto3 : req.body.puesto3,
            puesto4 : req.body.puesto4,
            puesto5 : req.body.puesto5,
            puesto6 : req.body.puesto6,
            puesto7 : req.body.puesto7,
            puesto8 : req.body.puesto8,
            puesto9 : req.body.puesto9,
            puesto10 : req.body.puesto10,
        }
    );
    nuevo_ranking.save(function(error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el ranking del MEP, ocurrió el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registró correctamente el ranking del MEP.`
                }
            );

        }

    });
}


module.exports.listar_ranking_mep = (req, res) => {

    modelo_ranking.find().then(
        function(ranking){
            if(ranking.length >0){
                res.json(
                    {
                        success: true,
                        ranking: ranking
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        ranking: 'No hay ranking.'
                    }
                )
            }
            
        }
        
    )};    