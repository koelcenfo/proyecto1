'use strict';
const mongoose = require('mongoose');
let schema_criterio = new mongoose.Schema(
    {
        criterio: { type: String, required: true },
        criterio2: { type: String, required: true },
        criterio3: { type: String, required: true },
        criterio4: { type: String, required: true },
        criterio5: { type: String, required: true },
        /*  */
        porcentaje: { type: String, required: true },
        porcentaje2: { type: String, required: true },
        porcentaje3: { type: String, required: true },
        porcentaje4: { type: String, required: true },
        porcentaje5: { type: String, required: true }
    }
);
module.exports = mongoose.model('criterio', schema_criterio);