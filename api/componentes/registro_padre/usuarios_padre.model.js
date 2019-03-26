'use strict'
const mongoose = require('mongoose');

let schema_padre = new mongoose.Schema(
    {
        padre_nombre : {type : String, required:true},
        padre_apellido : {type : String, required:false},
        padre_correo_electronico : {type : String, required:false},
        padre_hijos : {type : Number, required:false},
        padre_fecha: {type : Date, required:false},
        padre_direccion: {type : String, required:false},
        padre_telefono: {type : Number, required:false},
        padre_nacionalidad: {type : String, required:false},
        padre_cedula: {type : String, required:false},
        padre_contrasena : {type : String, required:false},
        padre_imagen : {type : String, required:false},
        tipo_usuario : {type : String, required: false},
        padre_id :{type : String, required: true}
    }
);

module.exports = mongoose.model('Usuario_padre', schema_padre);