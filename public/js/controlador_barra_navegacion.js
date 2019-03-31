'use strict'

const enlaces = document.querySelectorAll('.barra_navegacion a');
let conectado = sessionStorage.getItem('conectado');
let tipo_usuario = sessionStorage.getItem('tipo_usuario');

function cerrar_sesion(){
    sessionStorage.removeItem('conectado');
    sessionStorage.removeItem('tipo_usuario');
    sessionStorage.removeItem('id_usuario');
    sessionStorage.removeItem('id_perfil');
    window.location.href('http://localhost:3000/public/index.html');
}

if(conectado){


    switch(tipo_usuario){
        case 'Padre':
        enlaces[0].classList.add('ocultar');/**Registro Padre */
        enlaces[1].classList.add('ocultar');/**Registro Institución*/
        enlaces[2].classList.add('ocultar');/**Iniciar Sesión */
        enlaces[3].classList.add('mostrar');/**Perfil */
        enlaces[4].classList.add('mostrar');/**Buscar Centro Educativo */
        enlaces[5].classList.add('mostrar');/**Cerrar Sesion */
        break;

        case 'Institucion':
            enlaces[0].classList.add('ocultar');/**Registro Padre */
            enlaces[1].classList.add('ocultar');/**Registro Institución*/
            enlaces[2].classList.add('ocultar');/**Iniciar Sesión */
            enlaces[3].classList.add('mostrar');/**Perfil */
            enlaces[4].classList.add('ocultar');/**Buscar Centro Educativo */
            enlaces[5].classList.add('mostrar');/**Cerrar Sesion */
        break;
    }
}else{
    enlaces[0].classList.add('mostrar');/**Registro Padre */
    enlaces[1].classList.add('mostrar');/**Registro Institución*/
    enlaces[2].classList.add('mostrar');/**Iniciar Sesión */
    enlaces[3].classList.add('ocultar');/**Perfil */
    enlaces[4].classList.add('ocultar');/**Buscar Centro Educativo */
    enlaces[5].classList.add('ocultar');/**Cerrar Sesion */
}  