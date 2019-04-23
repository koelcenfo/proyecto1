'use strict';
const input_util = document.querySelector('#txt_util');
const input_descripcion = document.querySelector('#txt_descripcion');
const id_usuario = sessionStorage.getItem('id_usuario');
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

  return error;


}
let obtener_datos = () => {
  if (validar() == false) {
    let util = input_util.value;
    let id_institucion = id_usuario;
    


    registrar_util(util, id_institucion);

  } else {
    swal.fire(
      {
        type: 'error',
        title: 'Por favor revise los campos del formulario de manera correcta.',
        text: 'La informacion del útil no se ha enviado correctamente.'
      }
    );
  }

};
boton_enviar.addEventListener('click', obtener_datos);
$(boton_enviar).on('click', function () {
  if (validar() == true) {
    input_util.value;
    input_descripcion.value;

  } else {
    $(input_util).val('');
    $(input_descripcion).val('');
  }

})
