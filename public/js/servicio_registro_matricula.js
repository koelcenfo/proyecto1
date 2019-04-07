'use strict';
let registrar_costos = (pnivel, pmatricula, pmensualidad) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_costo",
        method: "POST",
        data: {
            nivel: pnivel,
            matricula: pmatricula,
            mensualidad: pmensualidad
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Registrado correctamente',
                text: 'Informacion de los costos de la matricula y mensualidad registrados correctamente'
            }
        );
    }
    );

    request.fail(function (jqXHR, textStatus) {

    });



}
let listar_costo = () => {
    listar_costo = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_costo",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });

    request.done(function (res) {
        listar_costo = res.listar_costo;
    });

    request.fail(function (jqXHR, textStatus) {

    });
}