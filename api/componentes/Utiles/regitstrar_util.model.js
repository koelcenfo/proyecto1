'use strict';
const mongoose = require('mongoose');
let schema_utiles = new mongoose.Schema(
  {
    id_util: { type: mongoose.Schema.ObjectId, auto: true },
    id_institucion: { type: String, required: false },
    util: { type: String, required: true },
    descripcion: { type: String, required: true }





  }
);
module.exports = mongoose.model('util', schema_utiles);