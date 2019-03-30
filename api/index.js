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
    dburl = 
    'mongodb://koeladmins:Grupokoel2019@proyecto-shard-00-00-xwswr.mongodb.net:27017,proyecto-shard-00-01-xwswr.mongodb.net:27017,proyecto-shard-00-02-xwswr.mongodb.net:27017/test?ssl=true&replicaSet=proyecto-shard-0&authSource=admin&retryWrites=true',
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
db.on('error', console.error.bind(console, 'Error de conexión: con la base de datos '));

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
// sin esto no nos va a funcionar el servidor y no nos va atender lo que ocupamos 
app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const utiles=require('./componentes/Utiles/registrar_util.route');

app.use('/api',utiles);

const preguntas=require('./componentes/Preguntas/registrar_seccion_preguntas.route');

app.use('/api',preguntas);

const actividades=require('./componentes/actividades/actividades.route');

app.use('/api',actividades);

const citas=require('./componentes/citas/citas.route');
app.use('/api',citas);

const registro_padre=require('./componentes/registro_padre/usuarios_padre.route');
app.use('/api',registro_padre);

const registro_institucion=require('./componentes/registro_institucion/usuarios_institucion.route');
app.use('/api',registro_institucion);

<<<<<<< HEAD
<<<<<<< HEAD
const ranking = require('./componentes/ranking_mep/ranking_mep.route')
app.use('./api', ranking);
=======
=======
>>>>>>> 17f6465965a330bb9542d79da2e320e89d6d3084
const registrar_ranking=require('./componentes/ranking_mep/ranking_mep.route');
app.use('/api',registrar_ranking);


<<<<<<< HEAD
=======

>>>>>>> 17f6465965a330bb9542d79da2e320e89d6d3084

>>>>>>> cef069d163f39be1d06468930879530297cd2faf

const lista_oficial = require('./componentes/lista_oficial/lista_oficial.route')
app.use('./api', lista_oficial);




// Se guarda todo lo que se ha realizado
module.exports = app; /*lo que hace es exportarme el módulo*/

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};