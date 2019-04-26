'use strict';
const boton_actualizar = document.querySelector('#btn_enviar');
const select_nivel = document.createElement('select');
const select_util = document.createElement('select');
const input_descripcion = document.querySelector('#txt_descripcion');
const input_cantidad = document.querySelector('#nmb_cantidad');

let utiles = listar_util();
let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param); /* toma el parámetro del url y retorna el valor */
    return id;
};

let _id = get_param('id_util');

let util = buscar_util(_id);
let mostrar_datos = () => {
    const contenedor_niveles = document.querySelector('#contenedor_niveles');
    select_nivel.setAttribute("id", "slt_nivel");
    select_util.setAttribute("id", "slt_util");
    for (let i = 0; i < util.length; i++) {
        let opcion = new Option(util[i]['nivel']);


        select_nivel.options.add(opcion);

        contenedor_niveles.appendChild(select_nivel);

    }
    for (let i = 0; i < util.length; i++) {
        let opcion = new Option(util[i]['util']);


        select_util.options.add(opcion);

        contenedor_niveles.appendChild(select_util);

    }
    input_descripcion.value = util[0]['descripcion'];
    input_cantidad.value = util[0]['cantidad'];


}
if (util) {
    mostrar_datos();
}
let validar = () => {
    let error = false;
    if (input_descripcion.value == '') {
        input_descripcion.classList.add('error_input');
        error = true;

    } else {
        input_descripcion.classList.remove('error_input');
    }
    if (input_cantidad.value == '') {
        error = true;
        input_cantidad.classList.add('error_input');
    } else {
        input_cantidad.classList.remove('error_input');
    }
    return error;
}
let obtener_datos = () => {
    if (validar() == false) {
        let nivel = select_nivel.value;
        let util = select_util.value;
        let descripcion = input_descripcion.value;
        let cantidad = input_cantidad.value;
        actualizar_util(_id, nivel, util, descripcion, cantidad);

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
