'use strict';//Uso del modo estricto de javascript
const express = require('express');//Uso de la constante express
const router = express.Router();//Uso de la constante express en el Route
const api_institucion = require('./usuarios_institucion.api');//La constante api_institucion requiera el usuarios.api
router.route('/registrar_institucion')
    .post(
        function(req, res){
           api_institucion.registrar_institucion(req, res);
        }
    );

router.route('/validar_institucion')
.post(
    function(req, res){
        api_institucion.validar_institucion(req, res);
    }
);
router.route('/listar_institucion')
    .get(
        function (req, res){
            api_institucion.listar_institucion(req, res);
        }
    );
module.exports = router;