'use strict';
const express = require('express');
const router = express.Router();
const api_informacion= require('./informacion.api');

router.route('/registrar_informacion')
.post(
    function(req,res){
        api_informacion.registrar(req, res);
    }
);

router.route('/listar_informacion')
.get(
    function(req,res){
        api_informacion.listar_informacion(req,res);

    }
)
module.exports=router;