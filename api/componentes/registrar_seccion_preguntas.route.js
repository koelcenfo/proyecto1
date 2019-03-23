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
module.exports=router;