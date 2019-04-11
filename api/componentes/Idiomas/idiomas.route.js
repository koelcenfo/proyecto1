'use strict';
const express = require('express');
const router = express.Router();
const api_idioma = require('./idiomas.api');

router.route('/registrar_idioma')
    .post(
        function(req, res){
                api_idioma.registrar_idioma(req, res);
        }
    );
module.exports = router;