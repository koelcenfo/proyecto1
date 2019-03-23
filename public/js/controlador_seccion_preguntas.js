'use strict'



const input_titulo = document.querySelector('#txt_titulo');
const input_pregunta = document.querySelector('#txt_pregunta');
const boton_registrar = document.querySelector('#btn_registrar');
let validar = () => {
    let error = false;
    if (input_titulo.value == '') {
        error = true;
        input_titulo.classList.add('error_input');
    } else {
        input_titulo.classList.remove('error_input');
    }
    if (input_pregunta.value == '') {
        error = true;
        input_pregunta.classList.add('error_input');
    } else {
        input_pregunta.classList.remove('error_input');
    }

    return error;


};
let obtener_informacion = () => {
    if (validar() == false) {
        let titulo = input_titulo.value;
        let pregunta = input_pregunta.value;
        registrar_pregunta(titulo, pregunta) 
    } else {
        swal.fire({
            type: 'error',
            title: 'no se ha registrado pregunta'
        });
    };




}
boton_registrar.addEventListener('click', obtener_informacion);