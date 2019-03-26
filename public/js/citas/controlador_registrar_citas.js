'use strict';
const input_nombre_cita=document.querySelector('#txt_nombre_cita');
const input_nombre_familiar=document.querySelector('#txt_nombre_familiar');
const input_fecha=document.querySelector('#dt_fecha');
const input_hora=document.querySelector('#tm_hora');
const textarea_descripcion=document.querySelector('#txt_descripcion');
const boton_registrar_cita=document.querySelector('#btn_registrar_cita');

let validacion=()=>{
    let error=false;
    if (input_nombre_cita.value=='') {
        error=true;
        input_nombre_cita.classList.add('error_input');
    } else {
        input_nombre_cita.classList.remove('error_input');
    }

    if (input_nombre_familiar.value=='') {
        error=false;
        input_nombre_familiar.classList.add('error_input');
    } else {
        input_nombre_familiar.classList.remove('error_input');
    }

    if (input_fecha.value=='') {
        error=false;
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
    }

    if (input_hora.value=='') {
        error=true;
        input_hora.classList.add('error_input');
    } else {
        input_hora.classList.remove('error_input');
    }

    if (textarea_descripcion.value=='') {
        error=true;
        textarea_descripcion.classList.add('error_input');
    } else {
        textarea_descripcion.classList.remove('error_input');
    }
    return error;
};

let obtener_datos=()=>{
    if (validacion()==false) {
        let nombre_cita=input_nombre_cita.value;
        let nombre_familiar=input_nombre_familiar.value;
        let fecha=input_fecha.value;
        let hora=input_hora.value;
        let descripcion=textarea_descripcion.value;

        registrar_citas(nombre_cita,nombre_familiar,fecha,hora,descripcion);
    } else {
        swal.fire({
            type: 'warning',
            title: 'la cita no ha sido enviada',
            text: 'Por favor revise los campos que están resaltados'
        });
    }
};

boton_registrar_cita.addEventListener('click', obtener_datos);