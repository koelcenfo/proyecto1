'use strict';
const mongoose = require('mongoose');
let schema_utiles = new mongoose.Schema(
  {
    util: { type: String, required: true },
    descripcion: { type: String, required: true },
    cantidad: { type: Number, required: true }




  }
);
module.exports = mongoose.model('utiles', schema_utiles);