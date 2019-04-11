'use strict';

const input_institucion_nombre_encargado = document.querySelector('#txt_institucion_nombre_encargado');
const input_institucion_apellido_encargado = document.querySelector('#txt_institucion_apellido_encargado');
const input_institucion_departamento_encargado = document.querySelector('#txt_institucion_departamento_encargado');
const input_institucion_telefono = document.querySelector('#txt_institucion_telefono');
const input_institucion_correo_electronico = document.querySelector('#txt_institucion_correo_electronico');
const input_institucion_contrasena = document.querySelector('#txt_institucion_contrasena');
const input_institucion_nombre_inscrito = document.querySelector('#txt_institucion_nombre_inscrito');
const input_institucion_nombre = document.querySelector('#txt_institucion_nombre');
const fieldset_institucion_bachillerato_internacional = document.querySelector('#rbt_institucion_bachillerato_internacional');
const select_institucion_tipo = document.querySelector('#slt');
const select_institucion_generos = document.querySelector('#slt_institucion_generos');
const input_institucion_ideologia = document.querySelector('#txt_institucion_ideologia');
const input_institucion_fundacion = document.querySelector('#txt_institucion_fundacion');
const input_institucion_referencia = document.querySelector('#txt_institucion_referencia');
const input_institucion_cedula = document.querySelector('#txt_institucion_cedula');
const select_institucion_provincia = document.querySelector('#slt_institucion_provincia');
const select_institucion_canton = document.querySelector('#slt_institucion_canton');
const select_institucion_distrito = document.querySelector('#slt_institucion_distrito');
const input_institucion_direccion = document.querySelector('#txt_institucion_direccion');
const input_institucion_sitio_web = document.querySelector('#txt_institucion_sitio_web');
const input_institucion_fax = document.querySelector('#txt_institucion_fax');
const imagen_institucion = document.querySelector('#image_preview');
const input_institucion_facebook = document.querySelector('#txt_institucion_facebook');
const input_institucion_twitter = document.querySelector('#txt_institucion_twitter');
const input_institucion_cedula_encargado = document.querySelector('#txt_institucion_cedula_encargado');
const input_institucion_correo_electronico_encargado = document.querySelector('#txt_institucion_correo_electronico_encargado');
const boton_registrar = document.querySelector('#btn_registrar');


$("btn_registrar").click(function(){
    $(':checkbox').change(function() {
        var opts = $(":checkbox:checked").map(function() {
            return $(this).val();
        }).get(); 
        console.log(opts);
    });
});




/**Funcion de mostrar o esconder los niveles */
$(document).on("click", ".btn_add_row", function() {

    let row = $(".row").eq(0).clone().show();

    $(".idiomas").append(row);

});

$(document).on("click", ".btn_remove_row", function() {

    let index = $(".btn_remove_row").index(this);
    $(".row").eq(index).remove();

});
/**----------------Funcion de Idiomas------------ */

$(function () {
    $(".Niveles_escuela").hide();
    $(".Niveles_colegio").hide();
    $("#chkbox_escuela").click(function () {
        if ($(this).is(":checked")) {
            $(".Niveles_escuela").show();
        } else {
            $(".Niveles_escuela").hide();
        }
    });
    $("#chkbox_colegio").click(function () {
        if ($(this).is(":checked")) {
            $(".Niveles_colegio").show();
        } else {
            $(".Niveles_colegio").hide();
        }
    });
});



$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


let idiomas = $("input[name='idiomas[]']")
              .map(function(){return $(this).val();}).get();

// $(document).ready(function() {
// 	//variables
// 	let pass1 = $('[name=pass1]');
// 	let pass2 = $('[name=pass2]');
// 	let confirmacion = "Las contraseñas si coinciden";
//     let longitud = "La contraseña debe estar formada entre 8-16";
// 	let negacion = "No coinciden las contraseñas";
//     let vacio = "La contraseña no puede estar vacía";

 
	// //oculto por defecto el elemento span
	// let span = $('<span></span>').insertAfter(pass2);
	// span.hide();
	// //función que comprueba las dos contraseñas
	// function coincidePassword(){
	// let valor1 = pass1.val();
	// let valor2 = pass2.val();
	// //muestro el span
	// span.show().removeClass();
	// //condiciones dentro de la función
	// if(valor1 != valor2){
	// span.text(negacion).addClass('negacion');	
	// }
	// if(valor1.length==0 || valor1==""){
	// span.text(vacio).addClass('negacion');	
    // }
	// if(valor1.length<8 || valor1.length>16){
	// span.text(longitud).addClass('negacion');
    // }
    // if(valor1.length<8 || valor1.length>16){
    //     span.text(longitud).addClass('negacion');
    //     }
	// if(valor1.length!=0 && valor1==valor2){
	// span.text(confirmacion).removeClass("negacion").addClass('confirmacion');
	// }
	// // }
// 	// //ejecuto la función al soltar la tecla
// 	// pass2.keyup(function(){
// 	// coincidePassword();
// 	// });
// });



let validar = () => {

    let error = false;

    let bachillerato_internacional_seleccionado = document.querySelector('#rbt_institucion_bachillerato_internacional input[type=radio]:checked');

    if (input_institucion_nombre_encargado.value == '') {
        error = true;
        input_institucion_nombre_encargado.classList.add('error_input');
    } else {
        input_institucion_nombre_encargado.classList.remove('error_input');
    }

    if (input_institucion_apellido_encargado.value == '') {
        error = true;
        input_institucion_apellido_encargado.classList.add('error_input');
    } else {
        input_institucion_apellido_encargado.classList.remove('error_input');
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

    if (input_institucion_facebook.value == '') {
        error = true;
        input_institucion_facebook.classList.add('error_input');
    } else {
        input_institucion_facebook.classList.remove('error_input');
    }

    if (input_institucion_twitter.value == '') {
        error = true;
        input_institucion_twitter.classList.add('error_input');
    } else {
        input_institucion_twitter.classList.remove('error_input');
    }

    if (input_institucion_correo_electronico_encargado.value == '') {
        error = true;
        input_institucion_correo_electronico_encargado.classList.add('error_input');
    } else {
        input_institucion_correo_electronico_encargado.classList.remove('error_input');
    }

    if (input_institucion_cedula_encargado.value == '') {
        error = true;
        input_institucion_cedula_encargado.classList.add('error_input');
    } else {
        input_institucion_cedula_encargado.classList.remove('error_input');
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
        let institucion_apellido_encargado = input_institucion_apellido_encargado.value;
        let institucion_departamento_encargado = input_institucion_departamento_encargado.value;
        let institucion_telefono = input_institucion_telefono.value;
        let institucion_correo_electronico = input_institucion_correo_electronico.value;
        let institucion_contrasena = input_institucion_contrasena.value;
        let institucion_nombre_inscrito = input_institucion_nombre_inscrito.value;
        let institucion_nombre = input_institucion_nombre.value;
        let institucion_bachillerato_internacional = document.querySelector('#rbt_institucion_bachillerato_internacional input[type=radio]:checked').value;
        let institucion_tipo = select_institucion_tipo.value;
        // let institucion_idiomas = idiomas;
        let institucion_niveles = getValue();
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
        let institucion_facebook = input_institucion_facebook.value;
        let institucion_twitter = input_institucion_twitter.value;
        let institucion_correo_electronico_encargado = input_institucion_correo_electronico_encargado.value;
        let institucion_cedula_encargado = input_institucion_cedula_encargado.value;
        let institucion_fax = input_institucion_fax.value;
        let institucion_imagen = imagen_institucion.src;

        registrar_usuario(institucion_nombre_encargado, institucion_apellido_encargado ,institucion_departamento_encargado, institucion_telefono, institucion_correo_electronico,institucion_contrasena, institucion_nombre_inscrito, institucion_nombre, institucion_niveles, institucion_bachillerato_internacional, institucion_tipo,/*institucion_idiomas,*/ institucion_generos, institucion_ideologia, institucion_fundacion, institucion_referencia, institucion_cedula, institucion_provincia, institucion_canton, institucion_distrito, institucion_direccion, institucion_sitio_web, institucion_fax,institucion_imagen, institucion_facebook, institucion_twitter, institucion_correo_electronico_encargado, institucion_cedula_encargado);

    } else {
        swal.fire({
            type: 'error',
            title: 'El registro no se pudo completar.',
            text: 'Hay campos que no se han llenado.'
        });
    }
};

boton_registrar.addEventListener('click', obtener_datos);