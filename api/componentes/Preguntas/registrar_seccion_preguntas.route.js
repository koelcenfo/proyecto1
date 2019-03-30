'use strict';
const express=require('express');
const router=express.Router();
const api_preguntas=require('./registrar_seccion_preguntas.api');

router.route('/registrar_pregunta')
.post(
function (req,res) {
    api_preguntas.registrar(req,res);
}


);
router.route('/listar_pregunta')
.get(
    function (req,res) {
        api_preguntas.listar_pregunta(req,res);
    }
)

module.exports=router;