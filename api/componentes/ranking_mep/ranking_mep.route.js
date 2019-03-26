'use strict';

const express = require('express');
const router = express.Router();
const api_ranking = require('./ranking_mep.api');

router.route('/registrar_ranking')
.post(
    function(req, res){
        api_ranking.registrar(req, res);
    }
);

router.route('/listar_ranking')
.get(
    function(req, res){
        api_ranking.listar_ranking_mep(req, res);
    }
)

module.exports = router;