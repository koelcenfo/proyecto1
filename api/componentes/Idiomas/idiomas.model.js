'use strict';
const mongoose = require ('mongoose');

let schema_idiomas = new mongoose.Schema({
    idioma_id : {type: mongoose.Schema.ObjectId, auto: true},
    idiomas : {type : Array, required:true}
});
module.exports = mongoose.model('Idiomas_Institucion', schema_idiomas);