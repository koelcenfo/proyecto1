'use strict'


let validar_padre = (ppadre_cedula, ppadre_contrasena, callback,ppadre_id) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/validar_padre",
        type: "post",
        contenType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        /*async:false,*/
        data: {
            padre_cedula: ppadre_cedula,
            padre_contrasena: ppadre_contrasena
        }
    });

    request.done(function (response) {
        callback(response);
        sessionStorage.setItem('conectado', response.success);
        sessionStorage.setItem('tipo_usuario', response.usuario_padre.tipo_usuario); 
    });

    request.fail(function (response) {

        Swal.fire({
            type: 'error',
            title: 'Error',
            text: `El usuario no esta registrado o la contraseña de ${padre_cedula} es incorrecta`,
        })
    });

};

let listar_padre = () => {
    let lista_padre = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_padre",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });
    request.done(function (res) {
        lista_padre = res.padres;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_padre;
};

let validar_institucion = (pinstitucion_cedula, pinstitucion_constrasena, callback) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/validar_institucion',
        contenType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: "post",
        dataType: "json",
        data: {
            institucion_cedula: pinstitucion_cedula,
            institucion_contrasena: pinstitucion_constrasena
        }
    });

    request.done(function (response) {
        callback(response);
        sessionStorage.setItem('conectado', response.success);
        sessionStorage.setItem('tipo_usuario', response.usuario_institucion.tipo_usuario);
    });
    request.fail(function (response) {
        Swal.fire({
            type: 'error',
            title: 'Error',
            text: `El usuario no esta registrado o la contraseña es incorrecta`,
        })
    });
};