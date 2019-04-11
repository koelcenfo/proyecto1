'use strict'

const input_nombre = document.querySelector('');
const input_tipo = document.querySelector('');
const input_descripcion = document.querySelector('');
const boton_registrar = document.querySelector('');

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_tipo.value == '') {
        error = true;
        input_tipo.classList.add('error_input');
    } else {
        input_tipo.classList.remove('error_input');
    }

    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {
    if (validar()==false) {
        let nombre = input_nombre.value;
        let tipo = input_tipo.value;
        let descripcion = input_descripcion.value;

        registrar_becas(nombre, tipo, descripcion);
    } else {
        swal.fire({
            type: 'warning',
            title: 'La beca no fue registrada.',
            text: 'Por favor verifique los campos que están resaltados.'
        });
    }
};

boton_registrar.addEventListener('click', obtener_datos)