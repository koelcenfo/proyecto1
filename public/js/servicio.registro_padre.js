'use strict'

let registrar_padre = (ppadre_nombre, ppadre_apellido, ppadre_correo_electronico, ppadre_hijos, ppadre_fecha, ppadre_direccion, ppadre_telefono, ppadre_nacionalidad, ppadre_cedula, ppadre_contrasena, ppadre_imagen) => {
    let request = $.ajax({
        url:"http://localhost:4000/api/registrar_padre",
        method: "POST",
        data: {
            padre_nombre : ppadre_nombre,
            padre_apellido : ppadre_apellido,
            padre_correo_electronico : ppadre_correo_electronico,
            padre_hijos : ppadre_hijos,
            padre_fecha : ppadre_fecha,
            padre_direccion : ppadre_direccion,
            padre_telefono : ppadre_telefono,
            padre_nacionalidad : ppadre_nacionalidad,
            padre_cedula : ppadre_cedula,
            padre_contrasena : ppadre_contrasena,
            padre_imagen : ppadre_imagen
        },
        contenType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function(msg){

        swal.fire({
            type: 'success',
            tittle: 'Usuario Registrado Correctamente.',
            text: `Saludos ${ppadre_nombre} se ha registrado exitosamente en el sistema, puede iniciar sesion con el correo que ingresó.`,
            showConfirmButton: false,
            timer: 4000
        });
       setTimeout("window.location.href = 'index.html';",4500);
        
    });

    request.fail(function(jqXHR,textStatus){

    });
};