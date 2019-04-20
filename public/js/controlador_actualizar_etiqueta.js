'use strict';
const input_etiqueta = document.querySelector('#txt_etiqueta');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);

    return id;

};

let _id = get_param('id_etiqueta');

let etiqueta = buscar_etiqueta(_id);
if (etiqueta) {
    input_etiqueta.value = etiqueta[0]['etiqueta'];
    input_descripcion.value = etiqueta[0]['descripcion'];
}
let validar = () => {
    let error = false;
    if (input_etiqueta.value == '') {
        error = true;
        input_etiqueta.classList.add('error_input');
    } else {
        input_etiqueta.classList.remove('error_input');
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
        let etiqueta = input_etiqueta.value;
        let descripcion = input_descripcion.value;
        actualizar_etiqueta(_id, etiqueta, descripcion);

    } else {
        swal.fire(
            {
                type: 'error',
                title: '¡Revise los campos nuevamente!',
                text: 'No se ha podido actualizar la informacion de las etiquetas del centro educativo'
            }
        );
    }
}
boton_actualizar.addEventListener('click', obtener_datos);
