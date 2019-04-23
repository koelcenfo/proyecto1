'use strict';
const select_nivel = document.querySelector('#slt_nivel');
const input_matricula = document.querySelector('#nmb_matricula');
const input_mensualidad = document.querySelector('#nmb_mensualidad');
const boton_registrar = document.querySelector('#btn_actualizar');
const id_usuario = sessionStorage.getItem('id_usuario');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
}
let _id = get_param('id_costo');

let costo = buscar_costo(_id);
let mostrar_datos = () => {
    slt_nivel.value = costo[0]['nivel'];
    input_matricula.value = costo[0]['matricula'];
    input_mensualidad.value = costo[0]['mensualidad'];
}
if (costo) {
    mostrar_datos();
}
let obtener_datos = () => {
    let nivel = slt_nivel.value;
    let matricula = input_matricula.value;
    let mensualidad = input_mensualidad.value;
    Swal.fire({
        title: '¿Está seguro que desea eliminar el costo del nivel?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            eliminar_costo(_id, nivel, matricula, mensualidad);
        }
    })
}
boton_registrar.addEventListener('click',obtener_datos);


