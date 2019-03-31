'use strict';

const slt_puesto1 = document.querySelector('#institucion_1').selectedOptions[0].text;
const slt_puesto2 = document.querySelector('#institucion_2').selectedOptions[0].text;
const slt_puesto3 = document.querySelector('#institucion_3').selectedOptions[0].text;
const slt_puesto4 = document.querySelector('#institucion_4').selectedOptions[0].text;
const slt_puesto5 = document.querySelector('#institucion_5').selectedOptions[0].text;
const slt_puesto6 = document.querySelector('#institucion_6').selectedOptions[0].text;
const slt_puesto7 = document.querySelector('#institucion_7').selectedOptions[0].text;
const slt_puesto8 = document.querySelector('#institucion_8').selectedOptions[0].text;
const slt_puesto9 = document.querySelector('#institucion_9').selectedOptions[0].text;
const slt_puesto10 = document.querySelector('#institucion_10').selectedOptions[0].text;
const boton_registrar = document.querySelector('#btn_registrar');

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

        let puesto1 = slt_puesto1;
        let puesto2 = slt_puesto2;
        let puesto3 = slt_puesto3;
        let puesto4 = slt_puesto4;
        let puesto5 = slt_puesto5;
        let puesto6 = slt_puesto6;
        let puesto7 = slt_puesto7;
        let puesto8 = slt_puesto8;
        let puesto9 = slt_puesto9;
        let puesto10 = slt_puesto10;

        registrar_ranking_mep(puesto1, puesto2, puesto3, puesto4, puesto5, puesto6, puesto7, puesto8, puesto9, puesto10);


};



function cargar_instituciones()
{
    let institucion = listar_institucion();
    let array = []

    for (let i = 0; i < institucion.length; i++) {

        array[i] = institucion[i]['institucion_nombre'];
    }
    for(let i in array)
    { 
        document.getElementById("institucion_1").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>";
        document.getElementById("institucion_2").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_3").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_4").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_5").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_6").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_7").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_8").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_9").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_10").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>";  

    }
}



