'use strict';

const input_nombre=document.querySelector('#txt_nombre');
const input_fecha=document.querySelector('#dt_fecha');
const input_hora=document.querySelector('#txt_hora');
const input_lugar=document.querySelector('#txt_lugar');
const textarea_descripcion=document.querySelector('#txt_descripcion');
const boton_aceptar=document.querySelector('#btn_aceptar');

let validacion=()=>{
    let error=false;
    
    if (input_nombre.value=='') {
        error=true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_fecha.value=='') {
        error=true;
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

    if (input_lugar.value=='') {
        error=true;
        input_lugar.classList.add('error_input');
    } else {
        input_lugar.classList.remove('error_input');
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
        
        let nombre=input_nombre.value;
        let fecha=input_fecha.value;
        let hora=input_hora.value;
        let lugar=input_lugar.value;
        let descripcion=textarea_descripcion.value;

        registrar_actividades(nombre,fecha,hora,lugar,descripcion);

    } else {
        swal.fire({
            type:'warning',
            title: 'La actividad no fue registrada',
            text: 'Por favor verifique los campos que están resaltados'
        });
    }
};


boton_aceptar.addEventListener('click',obtener_datos);