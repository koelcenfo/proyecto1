'use strict';
const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;
    if (input_pregunta.value == '') {
        error = true;
        input_pregunta.classList.add('error_input');
    } else {
        input_pregunta.classList.remove('error_input');
    }
    if (input_respuesta.value == '') {
        error = true;
        input_respuesta.classList.add('error_input');
    } else {
        input_respuesta.classList.remove('error_input');
    }

    return error;


};
let obtener_informacion = () => {
    if (validar() == false) {

        let pregunta = input_pregunta.value;
        let respuesta = input_respuesta.value;
        registrar_pregunta(pregunta, respuesta)
    } else {
        swal.fire({
            type: 'error',
            title: 'no se ha registrado pregunta'
        });
    };




}
boton_registrar.addEventListener('click', obtener_informacion);
$(boton_registrar).on('click', function () {
    $(input_pregunta).val('');
    $(input_respuesta).val('');
})