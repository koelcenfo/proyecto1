'use strict';
const express=require('express');
const router= express.Router();
const api_actividades=require('./actividades.api');

router.route('/registrar_actividades')//ruta que usamos para probarlo en postman
    .post(
        function(req,res){
            api_actividades.registrar(req,res);
        }
    );
router.route('/listar_actividades')//ruta que usamos para probarlo en postman
        .get(
            function(req,res){
                api_actividades.listar_actividad(req, res);
            }
        )
module.exports=router;