'use strict';
const express = require('express');
const router = express.Router();
const api_criterios = require('./registrar_criterios.api');

router.route('/registrar_criterio')
    .post(
        function (req, res) {
            api_criterios.registrar_criterio(req, res);
        }
    )
router.route('/listar_criterio')
    .get(
        function (req, res) {
            api_criterios.listar_criterio(req, res);
        }
    );
module.exports = router;