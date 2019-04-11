'use strict'

const mongoose=require('mongoose');

let schema_becas= new mongoose.Schema({
    id_becas:{type:mongoose.Schema.ObjectId, auto:true},
    nombre:{type: String, required: true},
    tipo:{type: String, required: true},
    descripcion:{type: String, required:true}
});

module.exports=mongoose.model('becas',schema_becas);