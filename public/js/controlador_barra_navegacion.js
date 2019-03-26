'use strict'

const enlaces = document.querySelectorAll('.barra_navegacion a');
let conectado = sessionStorage.getItem('conectado');
let tipo_usuario = sessionStorage.getItem('tipo_usuario');

if(conectado){


    switch(tipo_usuario){
        case 'Padre':
        enlaces[0].classList.add('ocultar');
        enlaces[1].classList.add('ocultar');
        enlaces[2].classList.add('ocultar');
        enlaces[3].classList.add('mostrar');
        enlaces[4].classList.add('mostrar');
        break;

        case 'Institucion':
            enlaces[0].classList.add('ocultar');
            enlaces[1].classList.add('ocultar');
            enlaces[2].classList.add('ocultar');
            enlaces[3].classList.add('mostrar');
            enlaces[4].classList.add('mostrar');
        break;
    }
}else{
    enlaces[0].classList.add('mostrar');
    enlaces[1].classList.add('mostrar');
    enlaces[2].classList.add('mostrar');
    enlaces[3].classList.add('ocultar');
    enlaces[4].classList.add('ocultar');
}  