'use strict';
const mongoose = require('mongoose');
let schema_pregunta = new mongoose.Schema(
    {

      
        pregunta: { type: String, required: true },
        respuesta: { type: String, required: true }

    }
);
module.exports = mongoose.model('pregunta', schema_pregunta);