'use strict'
let listar_pregunta = () => {
    let listar_pregunta = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_pregunta",
        method: "GET",
        data: {



        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false

    });

    request.done(function (res) {
        listar_pregunta = res.pregunta;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listar_pregunta;




};

let registrar_pregunta = (ppregunta, prespuesta, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_pregunta",
        method: "POST",
        data: {
            pregunta: ppregunta,
            respuesta: prespuesta,
            


        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

    });

    request.done(function (res) {
        swal.fire(
            {
                type: 'success',
                title: 'pregunta enviada de manera correcta'
            });
    });

    request.fail(function (jqXHR, textStatus) {

    });

};