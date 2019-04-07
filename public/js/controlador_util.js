'use strict';
const input_util = document.querySelector('#txt_util');
const input_descripcion = document.querySelector('#txt_descripcion');
const nmb_cantidad = document.querySelector('#nmb_cantidad');
const boton_atras = document.querySelector('#btn_atras');
const boton_enviar = document.querySelector('#btn_enviar');


let validar = () => {
  let error = false;
  if (input_util.value == '') {
    error = true;
    input_util.classList.add('error_input');
  } else {
    input_util.classList.remove('error_input');
  }
  if (input_descripcion.value == '') {
    error = true;
    input_descripcion.classList.add('error_input');
  } else {
    input_descripcion.classList.remove('error_input');
  }
  if (nmb_cantidad.value == '') {
    error = true;
    nmb_cantidad.classList.add('error_input');
  } else {
    nmb_cantidad.classList.remove('error_input');
  }
  return error;


}
let obtener_datos = () => {
  if (validar() == false) {
    let util = input_util.value;
    let descripcion = input_descripcion.value;
    let cantidad = nmb_cantidad.value;

    registrar_util(util, descripcion, cantidad);

  } else {
    swal.fire(
      {
        type: 'error',
        title: 'Revise los campos',
        text: 'la informacion del útil no se ha enviado correctamente'
      }
    );
  }

};
boton_enviar.addEventListener('click', obtener_datos);
$(boton_enviar).on('click',function () {
  $(input_util).val('');
  $(input_descripcion).val('');
  $(nmb_cantidad).val('');
})

