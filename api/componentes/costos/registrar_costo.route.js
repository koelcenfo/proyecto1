'use strict';
const express = require('express');
const router = express.Router();
const api_costo = require('./registrar_costo.api');

router.route('/registrar_costo')
    .post(
        function (req,res) {
            api_costo.registrar_costos(req,res);
        }
    )
router.route('/listar_costo')
.get(
    function (req,res) {
        api_costo.listar_costo(req,res);
    }
);
module.exports=router;
