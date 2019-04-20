'use strict'

const textarea_comentario = document.querySelector('#textarea_comentario');
// const stars = document.querySelector('');
const container = document.querySelector('#div_registro_comentarios');
const boton_enviar = document.querySelector('#enviar_comentario');

let get_value = 0;

$('.starrr').starrr({
    rating: 0,
    change: function(e, value){
    get_value = value;
  }
});
