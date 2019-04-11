'use strict';

let registrar_util = (putil, pdescripcion, pid_intitucion) => {

  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_util",
    method: "POST",
    data: {
      util: putil,
      descripcion: pdescripcion,
      id_institucion: pid_intitucion

    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8'

  });

  request.done(function (msg) {
    swal.fire(
      {
        type: 'success',
        title: 'Informacion de utiles enviada.',
        text: 'Se envió la informacion de los útiles correctamente.'
      }
    );
  });

  request.fail(function (jqXHR, textStatus) {

  });




};
let listar_util = () => {
  let listar_util = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/listar_utiles",
    method: "GET",
    data: {

    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    async: false
  });

  request.done(function (res) {
    listar_util=res.util;
  });

  request.fail(function (jqXHR, textStatus) {

  });

  return listar_util;




};