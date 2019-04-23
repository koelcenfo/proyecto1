'use strict';
const input_etiqueta = document.querySelector('#txt_etiqueta');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_eliminar = document.querySelector('#btn_registrar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
}
let _id = get_param('id_etiqueta');

let etiqueta = buscar_etiqueta(_id);

let mostrar_datos = () => {
    input_etiqueta.value = etiqueta[0]['etiqueta'];
    input_descripcion.value = etiqueta[0]['descripcion'];
};
if (etiqueta) {
    mostrar_datos();
}
let obtener_datos = () => {
    let etiqueta = input_etiqueta.value;
    let descripcion = input_descripcion.value;

    Swal.fire({
        title: '¿Está seguro que desea eliminar la pregunta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            eliminar_etiqueta(_id, etiqueta, descripcion);
        }
    })

};
boton_eliminar.addEventListener('click',obtener_datos);





