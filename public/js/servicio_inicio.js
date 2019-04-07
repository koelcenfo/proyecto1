'use strict'


let validar_padre = (ppadre_correo_electronico, ppadre_contrasena, callback) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/validar_padre",
        type: "post",
        contenType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        /*async:false,*/
        data: {
            padre_correo_electronico: ppadre_correo_electronico,
            padre_contrasena: ppadre_contrasena
        }
    });

    request.done(function (response) {

        callback(response);
        sessionStorage.setItem('conectado', response.success);
        sessionStorage.setItem('tipo_usuario', response.usuario_padre.tipo_usuario);
        sessionStorage.setItem('id_usuario', response.usuario_padre.padre_id);
    });

    request.fail(function (response) {
        Swal.fire({
            type: 'error',
            title: '¡Error!',
            text: `El usuario no esta registrado o la contraseña es incorrecta.`,
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

let validar_institucion = (pinstitucion_correo_electronico, pinstitucion_constrasena, callback) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/validar_institucion',
        contenType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: "post",
        dataType: "json",
        data: {
            institucion_correo_electronico: pinstitucion_correo_electronico,
            institucion_contrasena: pinstitucion_constrasena
        }
    });
    request.done(function (response) {
        
        callback(response);
        sessionStorage.setItem('conectado', response.success);
        sessionStorage.setItem('tipo_usuario', response.usuario_institucion.tipo_usuario);
        sessionStorage.setItem('id_usuario', response.usuario_institucion.institucion_id);
    });
    request.fail(function (response) {
        Swal.fire({
            type: 'error',
            title: '¡Error!',
            text: `El usuario no esta registrado o la contraseña es incorrecta.`,
        })
    });
};

let listar_institucion = () => {
    let listar_institucion = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_institucion",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });
    request.done(function (res) {
        listar_institucion = res.instituciones;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listar_institucion;
};
