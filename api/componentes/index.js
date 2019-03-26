'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection, 
    //nombre de la base de datos 
    dburl='mongodb://koeladmins:Grupokoel2019@proyecto-shard-00-00-xwswr.mongodb.net:27017,proyecto-shard-00-01-xwswr.mongodb.net:27017,proyecto-shard-00-02-xwswr.mongodb.net:27017/test?ssl=true&replicaSet=proyecto-shard-0&authSource=admin&retryWrites=true',
    // dburl = 'mongodb://pabs:1biblioteca9@ds163680.mlab.com:63680/bd_biblioteca',
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión con la base de datos: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});/*sin esto no nos sirve el servidor y no nos va a atender lo que ocupamos */

const actividades=require('./componentes/actividades/actividades.route');
app.use('/api',actividades);

const citas=require('./componentes/citas/citas.route');
app.use('/api',citas);

const preguntas=require('./componentes/seccion_preguntas/preguntas.route');
app.use('api',preguntas);




// Se guarda todo lo que se ha realizado
module.exports = app; //exporta el módulo

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};