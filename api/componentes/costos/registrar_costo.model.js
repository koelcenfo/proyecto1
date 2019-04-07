'use strict';
const mongoose = require('mongoose');

let schema_costo = new mongoose.Schema(
    {
        nivel: { type: String, required: true },
        matricula: { type: Number, required: true },
        mensualidad: { type: Number, required: true }
    }
);
module.exports = mongoose.model('costos', schema_costo);