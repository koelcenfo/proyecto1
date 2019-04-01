'use strict';
const mongoose = require('mongoose');
let schema_pregunta = new mongoose.Schema(
    {

        id_pregunta: { type: mongoose.Schema.ObjectId, auto: true },
        id_institucion: { type: String, required: true }, /*se necesita para guardar quien me registró eso*/
        pregunta: { type: String, required: true },
        respuesta: { type: String, required: true }

    }
);
module.exports = mongoose.model('pregunta', schema_pregunta);