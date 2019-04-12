'use strict';
let registrar_criterio = (pcriterio, pcriterio2, pcriterio3, pcriterio4, pcriterio5, pporcentaje, pporcentaje2, pporcentaje3, pporcentaje4, pporcentaje5, pid_institucion) => {
    var request = $.ajax({
        url: "http:localhost:4000/api/registrar_criterio",
        method: "POST",
        data: {
            criterio: pcriterio,
            criterio2: pcriterio2,
            criterio3: pcriterio3,
            criterio4: pcriterio4,
            criterio5: pcriterio5,
            porcentaje: pporcentaje,
            porcentaje2: pporcentaje2,
            porcentaje3: pporcentaje3,
            porcentaje4: pporcentaje4,
            porcentaje5: pporcentaje5,
            intitucion: pid_institucion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Criterio registrado correctamente',
                text: 'la información del criterio de evaluación fue registrada correctamente'
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });






}
let listar_criterio = () => {
    listar_criterio = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_criterio",
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });

    request.done(function (res) {
        listar_criterio = res.criterio;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listar_criterio;
};