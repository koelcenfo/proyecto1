'use strict'

let registrar_usuario = (pinstitucion_nombre_encargado, pinstitucion_apellido_encargado, pinstitucion_departamento_encargado, pinstitucion_telefono, pinstitucion_correo_electronico, pinstitucion_contrasena, pinstitucion_nombre_inscrito, pinstitucion_nombre, pinstitucion_niveles, pinstitucion_bachillerato_internacional, pinstitucion_tipo, /*pinstitucion_idiomas, */pinstitucion_generos, pinstitucion_ideologia, pinstitucion_fundacion, pinstitucion_referencia, pinstitucion_cedula, pinstitucion_provincia, pinstitucion_canton, pinstitucion_distrito, pinstitucion_direccion, pinstitucion_sitio_web, pinstitucion_fax, pinstitucion_facebook, pinstitucion_twitter ,pinstitucion_imagen, pinstitucion_cedula_encargado,pinstitucion_correo_electronico_encargado,  ptipo_usuario) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_institucion",
        method: "POST",
        data: {
            institucion_nombre: pinstitucion_nombre,
            institucion_nombre_inscrito: pinstitucion_nombre_inscrito,
            institucion_cedula: pinstitucion_cedula,
            institucion_telefono: pinstitucion_telefono,
            institucion_niveles: pinstitucion_niveles,
            institucion_tipo: pinstitucion_tipo,
            /* institucion_idiomas: pinstitucion_idiomas,*/
            institucion_generos: pinstitucion_generos,
            institucion_provincia: pinstitucion_provincia,
            institucion_canton: pinstitucion_canton,
            institucion_distrito: pinstitucion_distrito,
            institucion_direccion: pinstitucion_direccion,
            institucion_fundacion: pinstitucion_fundacion,
            institucion_referencia: pinstitucion_referencia,
            institucion_ideologia: pinstitucion_ideologia,
            institucion_bachillerato_internacional: pinstitucion_bachillerato_internacional,
            institucion_correo_electronico: pinstitucion_correo_electronico,
            institucion_sitio_web: pinstitucion_sitio_web,
            institucion_facebook: pinstitucion_facebook,
            institucion_twitter: pinstitucion_twitter,
            institucion_nombre_encargado: pinstitucion_nombre_encargado,
            institucion_apellido_encargado : pinstitucion_apellido_encargado,
            institucion_cedula_encargado: pinstitucion_cedula_encargado,
            institucion_departamento_encargado: pinstitucion_departamento_encargado,
            institucion_correo_electronico_encargado: pinstitucion_correo_electronico_encargado,
            institucion_contrasena : pinstitucion_contrasena,
            institucion_fax: pinstitucion_fax,
            institucion_imagen : pinstitucion_imagen
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function(msg){

        swal.fire({
            type: 'success',
            title: 'Usuario registrado Correctamente.',
            text: `Saludos ${pinstitucion_nombre_encargado}, su institución con el nombre de ${pinstitucion_nombre} ha sido registrada exitosamente en el sistema. Puede iniciar sesión con el correo ${pinstitucion_correo_electronico} y la contraseña que ingresó.`,
            showConfirmButton: false,
            timer: 4000
        });
        /*setTimeout("window.location.href = 'index.html';",4500);*/
    });
    
    request.fail(function(msg){
        Swal.fire({
            type: 'error',
            title: 'Error.',
            text: '¡Ocurrió un error!',
          });
    });
};

