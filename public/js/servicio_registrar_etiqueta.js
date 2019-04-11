'use strict';

let registrar_datos = (petiqueta, pdescripcion,pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_etiqueta",
        method: "POST",
        data: {
            etiqueta: petiqueta,
            descripcion: pdescripcion,
            intitucion:pid_institucion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8'

    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'informacion de etiqueta enviada correctamente',
                text: 'las etiquetas fueron registradas con exito'
            }
        )
    });

    request.fail(function (jqXHR, textStatus) {

    });





};
let listar_etiqueta = () => {
    listar_etiqueta = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_etiqueta",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: false

    });

    request.done(function (res) {
        listar_etiqueta = res.etiqueta;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listar_etiqueta;


}

