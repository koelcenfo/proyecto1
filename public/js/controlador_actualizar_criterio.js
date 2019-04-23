'use strict';
const input_criterio = document.querySelector('#txt_criterio');
const input_criterio_2 = document.querySelector('#txt_criterio_2');
const input_criterio_3 = document.querySelector('#txt_criterio_3');
const input_criterio_4 = document.querySelector('#txt_criterio_4');
const input_criterio_5 = document.querySelector('#txt_criterio_5');
/*  */
const input_porcentaje = document.querySelector('#txt_porcentaje');
const input_porcentaje_2 = document.querySelector('#txt_porcentaje_2');
const input_porcentaje_3 = document.querySelector('#txt_porcentaje_3');
const input_porcentaje_4 = document.querySelector('#txt_porcentaje_4');
const input_porcentaje_5 = document.querySelector('#txt_porcentaje_5');
/*  */
const boton_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
};
let _id = get_param('id_criterio');

let criterio = buscar_criterio(_id);
if (criterio) {
    input_criterio.value = criterio[0]['criterio'];
    input_criterio_2.value = criterio[0]['criterio2'];
    input_criterio_3.value = criterio[0]['criterio3'];
    input_criterio_4.value = criterio[0]['criterio4'];
    input_criterio_5.value = criterio[0]['criterio5'];

    input_porcentaje.value = criterio[0]['porcentaje'];
    input_porcentaje_2.value = criterio[0]['porcentaje2'];
    input_porcentaje_3.value = criterio[0]['porcentaje3'];
    input_porcentaje_4.value = criterio[0]['porcentaje4'];
    input_porcentaje_5.value = criterio[0]['porcentaje5'];


}
let validar = () => {

    let error = false;
    if (input_criterio.value == '') {
        error = true;
        input_criterio.classList.add('error_input');
    } else {
        input_criterio.classList.remove('error_input');
    }
    if (input_criterio_2.value == '') {
        error = true;
        input_criterio_2.classList.add('error_input');
    } else {
        input_criterio_2.classList.remove('error_input');
    }
    if (input_criterio_3.value == '') {
        error = true;
        input_criterio_3.classList.add('error_input');
    } else {
        input_criterio_3.classList.remove('error_input');
    }
    if (input_criterio_3.value == '') {
        error = true;
        input_criterio_3.classList.add('error_input');
    } else {
        input_criterio_3.classList.remove('error_input');
    }
    if (input_criterio_4.value == '') {
        error = true;
        input_criterio_4.classList.add('error_input');
    } else {
        input_criterio_4.classList.remove('error_input');
    }
    if (input_criterio_5.value == '') {
        error = true;
        input_criterio_5.classList.add('error_input');
    } else {
        input_criterio_5.classList.remove('error_input');
    }
    if (input_porcentaje.value == '') {
        error = true;
        input_porcentaje.classList.add('error_input');
    } else {
        input_porcentaje.classList.remove('error_input');
    }
    if (input_porcentaje_2.value == '') {
        error = true;
        input_porcentaje_2.classList.add('error_input');
    } else {
        input_porcentaje_2.classList.remove('error_input');
    }
    if (input_porcentaje_3.value == '') {
        error = true;
        input_porcentaje_3.classList.add('error_input');
    } else {
        input_porcentaje_3.classList.remove('error_input');
    }
    if (input_porcentaje_4.value == '') {
        error = true;
        input_porcentaje_4.classList.add('error_input');
    } else {
        input_porcentaje_4.classList.remove('error_input');
    }
    if (input_porcentaje_5.value == '') {
        error = true;
        input_porcentaje_5.classList.add('error_input');
    } else {
        input_porcentaje_5.classList.remove('error_input');
    }
    return error;

}
let obtener_datos = () => {
    if (validar() == false) {
        let criterio = input_criterio.value;
        let criterio2 = input_criterio_2.value;
        let criterio3 = input_criterio_3.value;
        let criterio4 = input_criterio_4.value;
        let criterio5 = input_criterio_5.value;
        /*  */
        let porcentaje = input_porcentaje.value;
        let porcentaje2 = input_porcentaje_2.value;
        let porcentaje3 = input_porcentaje_3.value;
        let porcentaje4 = input_porcentaje_4.value;
        let porcentaje5 = input_porcentaje_5.value;
        actualizar_criterio(_id, criterio, criterio2, criterio3, criterio4, criterio5, porcentaje, porcentaje2, porcentaje3, porcentaje4, porcentaje5)
    } else {
        swal.fire(
            {
                type: 'error',
                title: 'Revise cada campo del formulario.',
                text: 'El criterio de evaluación no se actualizó correctamente.'
            }
        );
    }
};
boton_actualizar.addEventListener('click', obtener_datos);
$(boton_actualizar).on('click', function () {
    if (validar() == true) {
        input_criterio.value;
        input_criterio_2.value;
        input_criterio_3.value;
        input_criterio_4.value;
        input_criterio_5.value;

        input_porcentaje.value;
        input_porcentaje_2.value;
        input_porcentaje_3.value;
        input_porcentaje_4.value;
        input_porcentaje_5.value;

    } else {
        $(input_criterio).val('');
        $(input_criterio_2).val('');
        $(input_criterio_3).val('');
        $(input_criterio_4).val('');
        $(input_criterio_5).val('');
        $(input_porcentaje).val('');
        $(input_porcentaje_2).val('');
        $(input_porcentaje_3).val('');
        $(input_porcentaje_4).val('');
        $(input_porcentaje_5).val('');

    }

})
