'use strict'

const input_padre_cedula = document.querySelector('#txt_padre_cedula');
const input_padre_contrasena = document.querySelector('#txt_padre_contrasena');
const boton_ingresar_padre = document.querySelector('#btn_ingresar_padre');

$('#tipo_usuario').on('change', function() {
    var val = $(this).val();
    $('#padre_familia').hide();
    $('#institucion').hide();
    $('#' + val).show();
});
function obtener_datos_padre(){
    let padre_cedula = input_padre_cedula.value;
    let padre_contrasena = input_padre_contrasena.value;

    let errorBlancos = validar_padre_error(padre_cedula, padre_contrasena);


    if (!errorBlancos) {

            validar_padre(padre_cedula, padre_contrasena,function(res){
                if (res.success) {
                  window.location.href = 'index.html';
        
                } else {
                    swal.fire({
                        type:'error',
                        title:'Error',
                        text:`El usuario con la cedula "${padre_cedula}" no existe, o la contraseña es incorrecta`
                    });
                }
            });

    } 
};

function validar_padre_error(ppadre_cedula, ppadre_contrasena){
    let error = false;
    
    if (ppadre_cedula == '') {
        error = true;
        input_padre_cedula.classList.add('error_input');
    } else {
        input_padre_cedula.classList.remove('error_input');
    }

    if (ppadre_contrasena == '') {
        error = true;
        input_padre_contrasena.classList.add('error_input');
    } else {
        input_padre_contrasena.classList.remove('error_input');
    }

    return error;
}; 

boton_ingresar_padre.addEventListener('click', obtener_datos_padre);

const input_institucion_cedula = document.querySelector('#txt_institucion_cedula');
const input_institucion_contrasena = document.querySelector('#txt_institucion_contrasena');
const boton_ingresar_institucion = document.querySelector('#btn_ingresar_institucion');

function obtener_datos_institucion(){
    let institucion_cedula = input_institucion_cedula.value;
    let institucion_contrasena = input_institucion_contrasena.value;

    let errorBlancos = validar_institucion_error(institucion_cedula, institucion_contrasena);
    if (!errorBlancos) {

            validar_institucion(institucion_cedula, institucion_contrasena,function(res){
                if (res.success) {
                    window.location.href = 'index.html';
        
                } else {
                    swal.fire({
                        type:'error',
                        title:'Error',
                        text:`El usuario con la cedula juridica"${institucion_cedula}" no existe, o la contraseña es incorrecta`
                    });
                }
            });

    } 
};

function validar_institucion_error(pinstitucion_cedula, pinstitucion_contrasena){
    let error = false;
    
    if (pinstitucion_cedula == '') {
        error = true;
        input_institucion_cedula.classList.add('error_input');
    } else {
        input_institucion_cedula.classList.remove('error_input');
    }

    if (pinstitucion_contrasena == '') {
        error = true;
        input_institucion_contrasena.classList.add('error_input');
    } else {
        input_institucion_contrasena.classList.remove('error_input');
    }

    return error;
}; 
boton_ingresar_institucion.addEventListener('click', obtener_datos_institucion);