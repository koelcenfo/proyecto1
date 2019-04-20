'use strict';
const boton_actualizar = document.querySelector('#btn_actualizar');
const slt_nivel = document.querySelector('#slt_nivel');
const input_matricula = document.querySelector('#nmb_matricula');
const input_mensualidad = document.querySelector('#nmb_mensualidad');
let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param); /* toma el parámetro del url y retorna el valor */
    return id;
};

let _id = get_param('id_costo');

let costo = buscar_costo(_id);
if (costo) {
    slt_nivel.value = costo[0]['nivel'];
    input_matricula.value = costo[0]['matricula'];
    input_mensualidad.value = costo[0]['mensualidad'];
}
let obtener_datos = () => {
    let nivel = slt_nivel.value;
    let matricula = input_matricula.value;
    let mensualidad = input_mensualidad.value;
    actualizar_costo(_id, nivel, matricula, mensualidad);
}

boton_actualizar.addEventListener('click', obtener_datos);




