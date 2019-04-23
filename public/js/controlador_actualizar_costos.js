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
        title: '¿Está seguro que desea actualizar los costos de la matricula y mensualidad?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            actualizar_costo(_id, nivel, matricula, mensualidad);
        }
    })
}
let validar = () => {
    let error = false;
    if (select_nivel.value == 'Seleccione el nivel') {
        error = true;
        select_nivel.classList.add('error_input');
    } else {
        select_nivel.classList.remove('error_input');
    }
    if (input_matricula.value == '' || input_matricula.value < 0) {
        error = true;
        input_matricula.classList.add('error_input');
    } else {
        input_matricula.classList.remove('error_input');
    }
    if (input_mensualidad.value == '' || input_mensualidad.value < 0) {
        error = true;
        input_mensualidad.classList.add('error_input');
    } else {
        input_mensualidad.classList.remove('error_input');
    }

    return error;

};

boton_actualizar.addEventListener('click', obtener_datos);
$(boton_actualizar).on('click', function () {
    if (validar() == false) {
        let nivel = select_nivel.value;
        let matricula = input_matricula.value;
        let mensualidad = input_mensualidad.value;
        let id_institucion = id_usuario;
        registrar_costos(nivel, matricula, mensualidad, id_institucion)
    } else {
        swal.fire({
            type:'warning',
            title: 'El costo no pudo ser actualizado.',
            text: 'Por favor verifique que los campos que están resaltados estén llenos.'
        });

    }
})




