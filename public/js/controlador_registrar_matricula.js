'use strict';
const select_nivel = document.querySelector('#slt_nivel');
const input_matricula = document.querySelector('#nmb_matricula');
const input_mensualidad = document.querySelector('#nmb_mensualidad');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;
    if (select_nivel.value == 'Seleccione el nivel') {
        error = true
        select_nivel.classList.add('error_input');
    } else {
        select_nivel.classList.remove('error_input');
    }
    if (input_matricula.value == '') {
        error = true
        input_matricula.classList.add('error_input');
    } else {
        input_matricula.classList.remove('error_input');
    }
    if (input_mensualidad.value == '') {
        error = true
        input_mensualidad.classList.add('error_input');
    } else {
        input_mensualidad.classList.remove('error_input');
    }

    return error;

};
let obtener_datos = () => {
    if (validar() == false) {
        let nivel = select_nivel.value;
        let matricula = input_matricula.value;
        let mensualidad = input_mensualidad.value;
        registrar_costos(nivel, matricula, mensualidad)
    } else {
        swal.fire(
            {
                type: 'error',
                title: 'Revise los campos nuevamente'
            }
        )
    };

};
boton_registrar.addEventListener('click', obtener_datos);
$(boton_registrar).on('click',function () {
    $(input_matricula).val('');
    $(input_mensualidad).val('');
    $(select_nivel).val('Seleccione el nivel');
})