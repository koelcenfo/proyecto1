'use strict';
const express=require('express');
const router=express.Router();
const api_utiles=require('./registrar_util.api');

router.route('/registrar_util')
.post(
    function(req,res){
        api_utiles.registrar(req,res);
    }
);
router.route('/listar_util')
.get(
    function(req,res){
        api_utiles.listar_utiles(req,res);
    }
)
module.exports=router;