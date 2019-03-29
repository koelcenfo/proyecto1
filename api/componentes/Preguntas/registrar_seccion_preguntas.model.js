'use strict';
const mongoose = require('mongoose');
let schema_pregunta = new mongoose.Schema(
    {
        id_pregunta:{type:mongoose.Schema.ObjectId,auto:true},
        titulo:{type:String,required:true},
        pregunta:{type:String,required:true}

    }
);
module.exports=mongoose.model('pregunta',schema_pregunta);