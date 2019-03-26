'use strict';

const slt_puesto1 = document.querySelector('#slt_puesto1');
const slt_puesto2 = document.querySelector('#slt_puesto2');
const slt_puesto3 = document.querySelector('#slt_puesto3');
const slt_puesto4 = document.querySelector('#slt_puesto4');
const slt_puesto5 = document.querySelector('#slt_puesto5');
const slt_puesto6 = document.querySelector('#slt_puesto6');
const slt_puesto7 = document.querySelector('#slt_puesto7');
const slt_puesto8 = document.querySelector('#slt_puesto8');
const slt_puesto9 = document.querySelector('#slt_puesto9');
const slt_puesto10 = document.querySelector('#slt_puesto10');
const btn_registrar = document.querySelector('#btn_registrar');

let validacion = () => {
    let error = false;
    if (slt_puesto1.value == '') {
        error = true;
        slt_puesto1.classList.add('error_input');
    } else {
        slt_puesto1.classList.remove('error_input');
    }

    if (slt_puesto2.value == '') {
        error = true;
        slt_puesto2.classList.add('error_input');
    } else {
        slt_puesto2.classList.remove('error_input');
    }

    if (slt_puesto3.value == '') {
        error = true;
        slt_puesto3.classList.add('error_input');
    } else {
        slt_puesto3.classList.remove('error_input');
    }

    if (slt_puesto4.value == '') {
        error = true;
        slt_puesto4.classList.add('error_input');
    } else {
        slt_puesto4.classList.remove('error_input');
    }

    if (slt_puesto5.value == '') {
        error = true;
        slt_puesto5.classList.add('error_input');
    } else {
        slt_puesto5.classList.remove('error_input');
    }

    if (slt_puesto6.value == '') {
        error = true;
        slt_puesto6.classList.add('error_input');
    } else {
        slt_puesto6.classList.remove('error_input');
    }

    if (slt_puesto7.value == '') {
        error = true;
        slt_puesto7.classList.add('error_input');
    } else {
        slt_puesto7.classList.remove('error_input');
    }

    if (slt_puesto8.value == '') {
        error = true;
        slt_puesto8.classList.add('error_input');
    } else {
        slt_puesto8.classList.remove('error_input');
    }

    if (slt_puesto9.value == '') {
        error = true;
        slt_puesto9.classList.add('error_input');
    } else {
        slt_puesto9.classList.remove('error_input');
    }

    if (slt_puesto10.value == '') {
        error = true;
        slt_puesto10.classList.add('error_input');
    } else {
        slt_puesto10.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {
    if (validacion() == false) {
        let puesto1 = slt_puesto1.value;
        let puesto2 = slt_puesto2.value;
        let puesto3 = slt_puesto3.value;
        let puesto4 = slt_puesto4.value;
        let puesto5 = slt_puesto5.value;
        let puesto6 = slt_puesto6.value;
        let puesto7 = slt_puesto7.value;
        let puesto8 = slt_puesto8.value;
        let puesto9 = slt_puesto9.value;
        let puesto10 = slt_puesto10.value;

        registrar_ranking_mep(puesto1, puesto2, puesto3, puesto4, puesto5, puesto6, puesto7, puesto8, puesto9, puesto10);

    } else {
        swal.fire({
            type: 'warning',
            title: 'El ranking no fue registrado',
            text: 'Por favor verifique los campos que están resaltados'
        });
    }
};

btn_registrar.addEventListener('click', obtener_datos);