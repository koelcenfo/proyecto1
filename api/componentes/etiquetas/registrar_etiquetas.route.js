'use strict';
const express = require('express');
const router = express.Router();
const api_etiquetas = require('./registrar_etiquetas.api');

router.route('/registrar_etiqueta')
    .post(
        function (req, res) {
            api_etiquetas.registrar(req, res);
        }
    )
router.route('/listar_etiqueta')
    .get(
        function (req, res) {
            api_etiquetas.listar_etiqueta(req, res);
        }
    );
module.exports = router;

