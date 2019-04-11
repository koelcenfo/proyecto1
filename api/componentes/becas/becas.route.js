'use strict'
const express = require('express');
const router = express.Router();
const api_becas = require('./becas.api');

router.route('/registrar_becas')
    .post(
        function(req,res){
            api_becas.registrar(req,res);
        }
    );
router.route('/listar_becas')
    .get(
        function(req,res){
            api_becas.listar_beca(req,res);
        }
    );
module.exports = router;