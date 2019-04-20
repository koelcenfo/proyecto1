'use strict';

const input_util = document.querySelector('#txt_util');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param); /* toma el parámetro del url y retorna el valor */
    return id;
};

let _id = get_param('id_util');

let util = buscar_util(_id);
if (util) {
    input_util.value = util[0]['util'];
    input_descripcion.value = util[0]['descripcion'];
}
let validar = () => {
    let error = false;
    if (input_util.value == '') {
        input_util.classList.add('error_input');
        error = true;

    } else {
        input_util.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }
    return error;
}
let obtener_datos = () => {
    if (validar() == false) {
        let util = input_util.value;
        let descripcion = input_descripcion.value;
        actualizar_util(_id, util, descripcion);

    } else {
        swal.fire(
            {
                type: 'error',
                title: '¡Revise los campos nuevamente!',
                text: 'No se ha podido actualizar la informacion del útil del centro educativo'
            }
        )
    }
}


boton_actualizar.addEventListener('click', obtener_datos);
