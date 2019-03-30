'use strict';

const input_institucion_nombre_encargado = document.querySelector('#txt_institucion_nombre_encargado');
const input_institucion_departamento_encargado = document.querySelector('#txt_institucion_departamento_encargado');
const input_institucion_telefono = document.querySelector('#txt_institucion_telefono');
const input_institucion_correo_electronico = document.querySelector('#txt_institucion_correo_electronico');
const input_institucion_contrasena = document.querySelector('#txt_institucion_contrasena');
const input_institucion_nombre_inscrito = document.querySelector('#txt_institucion_nombre_inscrito');
const input_institucion_nombre = document.querySelector('#txt_institucion_nombre');
const select_institucion_niveles = document.querySelector('#slt_institucion_niveles');
const fieldset_institucion_bachillerato_internacional = document.querySelector('#rbt_institucion_bachillerato_internacional');
const select_institucion_tipo = document.querySelector('#slt_institucion_tipo');
const fieldset_institucion_idiomas = document.querySelector('#rbt_institucion_idiomas');
const select_institucion_generos = document.querySelector('#slt_institucion_generos');
const input_institucion_ideologia = document.querySelector('#txt_institucion_ideologia');
const input_institucion_fundacion = document.querySelector('#txt_institucion_fundacion');
const input_institucion_referencia = document.querySelector('#txt_institucion_referencia');
const input_institucion_cedula = document.querySelector('#txt_institucion_cedula');
const select_institucion_provincia = document.querySelector('#slt_institucion_provincia');
const select_institucion_canton = document.querySelector('#slt_institucion_canton');
const select_institucion_distrito = document.querySelector('#txt_institucion_distrito');
const input_institucion_direccion = document.querySelector('#txt_institucion_direccion');
const input_institucion_sitio_web = document.querySelector('#txt_institucion_sitio_web');
const input_institucion_fax = document.querySelector('#txt_institucion_fax');
const imagen_institucion = document.querySelector('#image_preview');
const boton_registrar = document.querySelector('#btn_registrar');


let validar = () => {

    let error = false;

    let bachillerato_internacional_seleccionado = document.querySelector('#rbt_institucion_bachillerato_internacional input[type=radio]:checked');
    let idioma_seleccionado = document.querySelector('#rbt_institucion_idiomas input[type=radio]:checked');

    if (input_institucion_nombre_encargado.value == '') {
        error = true;
        input_institucion_nombre_encargado.classList.add('error_input');
    } else {
        input_institucion_nombre_encargado.classList.remove('error_input');
    }

    if (input_institucion_departamento_encargado.value == '') {
        error = true;
        input_institucion_departamento_encargado.classList.add('error_input');
    } else {
        input_institucion_departamento_encargado.classList.remove('error_input');
    }

    if (input_institucion_telefono.value == '' || input_institucion_telefono.value < 0) {
        error = true;
        input_institucion_telefono.classList.add('error_input');
    } else {
        input_institucion_telefono.classList.remove('error_input');
    }

    if (input_institucion_correo_electronico.value == '') {
        error = true;
        input_institucion_correo_electronico.classList.add('error_input');
    } else {
        input_institucion_correo_electronico.classList.remove('error_input');
    }

    if (input_institucion_contrasena.value == '') { 
        error = true;
        input_institucion_contrasena.classList.add('error_input'); 
    } else {
        input_institucion_contrasena.classList.remove('error_input');
    }

    if (input_institucion_nombre_inscrito.value == '') {
        error = true;
        input_institucion_nombre_inscrito.classList.add('error_input');
    } else {
        input_institucion_nombre_inscrito.classList.remove('error_input');
    }

    if (input_institucion_nombre.value == '') {
        error = true;
        input_institucion_nombre.classList.add('error_input');
    } else {
        input_institucion_nombre.classList.remove('error_input');
    }

    if (select_institucion_niveles.value == '') {
        error = true;
        select_institucion_niveles.classList.add('error_input');
    } else {
        select_institucion_niveles.classList.remove('error_input');
    }

    if (bachillerato_internacional_seleccionado == null) {
        error = true;
        fieldset_institucion_bachillerato_internacional.classList.add('error_input');
    } else {
        fieldset_institucion_bachillerato_internacional.classList.remove('error_input');
    }

    if (select_institucion_tipo.value == '') {
        error = true;
        select_institucion_tipo.classList.add('error_input');
    } else {
        select_institucion_tipo.classList.remove('error_input');
    }

    if (idioma_seleccionado == null) {
        error = true;
        fieldset_institucion_idiomas.classList.add('error_input');
    } else {
        fieldset_institucion_idiomas.classList.remove('error_input');
    }

    if (select_institucion_generos.value == '') {
        error = true;
        select_institucion_generos.classList.add('error_input');
    } else {
        select_institucion_generos.classList.remove('error_input');
    }

    if (input_institucion_ideologia.value == '') {
        error = true;
        input_institucion_ideologia.classList.add('error_input');
    } else {
        input_institucion_ideologia.classList.remove('error_input');
    }

    if (input_institucion_fundacion.value == '' || input_institucion_fundacion.value < 0) {
        error = true;
        input_institucion_fundacion.classList.add('error_input');
    } else {
        input_institucion_fundacion.classList.remove('error_input');
    }

    if (input_institucion_referencia.value == '') {
        error = true;
        input_institucion_referencia.classList.add('error_input');
    } else {
        input_institucion_referencia.classList.remove('error_input');
    }

    if (input_institucion_cedula.value == '' || input_institucion_cedula.value < 0) {
        error = true;
        input_institucion_cedula.classList.add('error_input');
    } else {
        input_institucion_cedula.classList.remove('error_input');
    }

    if (select_institucion_provincia.value == '') {
        error = true;
        select_institucion_provincia.classList.add('error_input');
    } else {
        select_institucion_provincia.classList.remove('error_input');
    }

    if (select_institucion_canton.value == '') {
        error = true;
        select_institucion_canton.classList.add('error_input');
    } else {
        select_institucion_canton.classList.remove('error_input');
    }

    if (select_institucion_distrito.value == '') {
        error = true;
        select_institucion_distrito.classList.add('error_input');
    } else {
        select_institucion_distrito.classList.remove('error_input');
    }

    if (input_institucion_direccion.value == '') {
        error = true;
        input_institucion_direccion.classList.add('error_input');
    } else {
        input_institucion_direccion.classList.remove('error_input');
    }

    if (input_institucion_sitio_web.value == '') {
        error = true;
        input_institucion_sitio_web.classList.add('error_input');
    } else {
        input_institucion_sitio_web.classList.remove('error_input');
    }

    if (input_institucion_fax.value == '') {
        error = true;
        input_institucion_fax.classList.add('error_input');
    } else {
        input_institucion_fax.classList.remove('error_input');
    }


    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        let institucion_nombre_encargado = input_institucion_nombre_encargado.value;
        let institucion_departamento_encargado = input_institucion_departamento_encargado.value;
        let institucion_telefono = input_institucion_telefono.value;
        let institucion_correo_electronico = input_institucion_correo_electronico.value;
        let institucion_contrasena = input_institucion_contrasena.value;
        let institucion_nombre_inscrito = input_institucion_nombre_inscrito.value;
        let institucion_nombre = input_institucion_nombre.value;
        let institucion_niveles = select_institucion_niveles.value;
        let institucion_bachillerato_internacional = document.querySelector('#rbt_institucion_bachillerato_internacional input[type=radio]:checked').value;
        let institucion_tipo = select_institucion_tipo.value;
        let institucion_idiomas = document.querySelector('#rbt_institucion_idiomas input[type=radio]:checked').value;
        let institucion_generos = select_institucion_generos.value;
        let institucion_ideologia = input_institucion_ideologia.value;
        let institucion_fundacion = input_institucion_fundacion.value;
        let institucion_referencia = input_institucion_referencia.value;
        let institucion_cedula = input_institucion_cedula.value;
        let institucion_provincia = select_institucion_provincia.value;
        let institucion_canton = select_institucion_canton.value;
        let institucion_distrito = select_institucion_distrito.value;
        let institucion_direccion = input_institucion_direccion.value;
        let institucion_sitio_web = input_institucion_sitio_web.value;
        let institucion_fax = input_institucion_fax.value;
        let institucion_imagen = imagen_institucion.src;

        registrar_usuario(institucion_nombre_encargado, institucion_departamento_encargado, institucion_telefono, institucion_correo_electronico,institucion_contrasena, institucion_nombre_inscrito, institucion_nombre, institucion_niveles, institucion_bachillerato_internacional, institucion_tipo, institucion_idiomas, institucion_generos, institucion_ideologia, institucion_fundacion, institucion_referencia, institucion_cedula, institucion_provincia, institucion_canton, institucion_distrito, institucion_direccion, institucion_sitio_web, institucion_fax,institucion_imagen,);

    } else {
        swal.fire({
            type: 'error',
            tittle: 'El registro no se pudo completar',
            text: 'Hay campos que no se han llenado'
        });
    }
};

boton_registrar.addEventListener('click', obtener_datos);