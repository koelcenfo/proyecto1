'use strict'
const express = require('express');
const router = express.Router();
const api_padre = require('./usuarios_padre.api');

router.route('/registrar_padre')
    .post(
        function (req, res) {
            api_padre.registrar_padre(req, res);
        }
    );

router.route('/validar_padre')
    .post(
        function (req, res) {
            api_padre.validar_padre(req, res);
        }
    );
router.route('/listar_padre')
    .get(
        function (req, res) {
            api_padre.listar_padre(req, res);
        }
    );
module.exports = router;