'use strict';
const express=require('express');
const router=express.Router();
const api_lista_utiles_mep=require('./lista_utiles_mep.api');

router.route('/registrar_lista_utiles_mep')
    .post(
        function(req,res){
            api_lista_utiles_mep.registrar(req,res);
        }
    );
router.route('/listar_utiles_mep')
        .get(
            function(req,res){
                api_lista_utiles_mep.listar_utiles_mep(req,res);
            }
        )
module.exports=router;