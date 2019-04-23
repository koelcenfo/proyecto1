'use strict';
let registrar_criterio = (pcriterio, pcriterio2, pcriterio3, pcriterio4, pcriterio5, pporcentaje, pporcentaje2, pporcentaje3, pporcentaje4, pporcentaje5, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_criterio",
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
                title: 'Informacion del criterio registrada correctamente.',
                text: 'La información del criterio de evaluación fue registrada correctamente.'
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });






}
let listar_criterio = () => {
    let listar_criterio = [];
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
let buscar_criterio = (id_criterio) => {
    let criterios = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_criterio/" + id_criterio,
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });


    request.done(function (res) {
        criterios = res.criterio;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return criterios;
}
let actualizar_criterio = (pid,pcriterio, pcriterio2, pcriterio3, pcriterio4, pcriterio5, pporcentaje, pporcentaje2, pporcentaje3, pporcentaje4, pporcentaje5) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_criterio",
        method: "POST",
        data: {
            id:pid,
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

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Informacion del criterio actualizada correctamente.',
                text: 'La información del criterio de evaluación fue actualizada correctamente.'
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
};