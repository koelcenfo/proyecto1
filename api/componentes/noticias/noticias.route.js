'use strict';
const express=require('express');
const router=express.Router();
const api_noticias=require('./noticias.api');

router.route('/registrar_noticias')
    .post(
        function(req,res){
            api_noticias.registrar(req,res);
        }
    );

router.route('/listar_noticias')
        .get(
            function(req,res){
                api_noticias.listar_noticias(req,res);
            }
        )
module.exports=router;