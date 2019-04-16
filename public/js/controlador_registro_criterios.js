'use strict';
const id_usuario = sessionStorage.getItem('id_usuario');
/*  */
const input_criterio = document.querySelector('#txt_criterio');
const input_criterio_2 = document.querySelector('#txt_criterio_2');
const input_criterio_3 = document.querySelector('#txt_criterio_3');
const input_criterio_4 = document.querySelector('#txt_criterio_4');
const input_criterio_5 = document.querySelector('#txt_criterio_5');
/*  */
const input_porcentaje = document.querySelector('#txt_porcentaje');
const input_porcentaje_2 = document.querySelector('#txt_porcentaje_2');
const input_porcentaje_3 = document.querySelector('#txt_porcentaje_3');
const input_porcentaje_4 = document.querySelector('#txt_porcentaje_4');
const input_porcentaje_5 = document.querySelector('#txt_porcentaje_5');
/*  */
const boton_registrar = document.querySelector('#btn_registrar');
const boton_agregar = document.querySelector('#btn_agregar');

let validar = () => {
    let error = false;
    if (input_criterio.value == '') {
        error = true;
        input_criterio.classList.add('error_input');
    } else {
        input_criterio.classList.remove('error_input');
    }
    if (input_criterio_2.value == '') {
        error = true;
        input_criterio_2.classList.add('error_input');
    } else {
        input_criterio_2.classList.remove('error_input');
    }
    if (input_criterio_3.value == '') {
        error = true;
        input_criterio_3.classList.add('error_input');
    } else {
        input_criterio_3.classList.remove('error_input');
    }
    if (input_criterio_3.value == '') {
        error = true;
        input_criterio_3.classList.add('error_input');
    } else {
        input_criterio_3.classList.remove('error_input');
    }
    if (input_criterio_4.value == '') {
        error = true;
        input_criterio_4.classList.add('error_input');
    } else {
        input_criterio_4.classList.remove('error_input');
    }
    if (input_criterio_5.value == '') {
        error = true;
        input_criterio_5.classList.add('error_input');
    } else {
        input_criterio_5.classList.remove('error_input');
    }
    if (input_porcentaje.value == '' || input_porcentaje < 0) {
        error = true;
        input_porcentaje.classList.add('error_input');
    } else {
        input_porcentaje.classList.remove('error_input');
    }
    if (input_porcentaje_2.value == '' || input_porcentaje_2 < 0) {
        error = true;
        input_porcentaje_2.classList.add('error_input');
    } else {
        input_porcentaje_2.classList.remove('error_input');
    }
    if (input_porcentaje_3.value == '' || input_porcentaje_3 < 0) {
        error = true;
        input_porcentaje_3.classList.add('error_input');
    } else {
        input_porcentaje_3.classList.remove('error_input');
    }
    if (input_porcentaje_4.value == '' || input_porcentaje_4 < 0) {
        error = true;
        input_porcentaje_4.classList.add('error_input');
    } else {
        input_porcentaje_4.classList.remove('error_input');
    }
    if (input_porcentaje_5.value == '' || input_porcentaje_5 < 0) {
        error = true;
        input_porcentaje_5.classList.add('error_input');
    } else {
        input_porcentaje_5.classList.remove('error_input');
    }
    return error;

}
let obtener_datos = () => {
    if (validar() == false) {
        let criterio = input_criterio.value;
        let criterio2 = input_criterio_2.value;
        let criterio3 = input_criterio_3.value;
        let criterio4 = input_criterio_4.value;
        let criterio5 = input_criterio_5.value;
        /*  */
        let porcentaje = input_porcentaje.value;
        let porcentaje2 = input_porcentaje_2.value;
        let porcentaje3 = input_porcentaje_3.value;
        let porcentaje4 = input_porcentaje_4.value;
        let porcentaje5 = input_porcentaje_5.value;
        /*  */
        let id_institucion = id_usuario;
        registrar_criterio(criterio, criterio2, criterio3, criterio4, criterio5, porcentaje, porcentaje2, porcentaje3, porcentaje4, porcentaje5, id_institucion);
    } else {
        swal.fire(
            {
                type: 'error',
                title: 'Revise cada campo del formulario.',
                text: 'El criterio de evaluación no se registró correctamente.'
            }
        );
    }
};
boton_registrar.addEventListener('click', obtener_datos);
$(boton_registrar).on('click', function () {
    $(input_criterio).val('');
    $(input_criterio_2).val('');
    $(input_criterio_3).val('');
    $(input_criterio_4).val('');
    $(input_criterio_5).val('');
    /*  */
    $(input_porcentaje).val('');
    $(input_porcentaje_2).val('');
    $(input_porcentaje_3).val('');
    $(input_porcentaje_4).val('');
    $(input_porcentaje_5).val('');
})




