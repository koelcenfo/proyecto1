'use strict'



const input_pregunta = document.querySelector('#txt_pregunta');
const input_resúesta = document.querySelector('#txt_respuesta');
const boton_registrar = document.querySelector('#btn_registrar');
const id_usuario = sessionStorage.getItem('id_usuario');
let validar = () => {
    let error = false;
    if (input_pregunta.value == '') {
        error = true;
        input_pregunta.classList.add('error_input');
    } else {
        input_pregunta.classList.remove('error_input');
    }
    if (input_resúesta.value == '') {
        error = true;
        input_resúesta.classList.add('error_input');
    } else {
        input_resúesta.classList.remove('error_input');
    }

    return error;


};
let obtener_informacion = () => {
    if (validar() == false) {
        let id_institucion = id_usuario;
        let pregunta = input_pregunta.value;
        let respuesta = input_resúesta.value;
        registrar_pregunta(pregunta, respuesta,id_institucion)
    } else {
        swal.fire({
            type: 'error',
            title: 'no se ha registrado pregunta'
        });
    };




}
boton_registrar.addEventListener('click', obtener_informacion);