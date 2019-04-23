'use strict';

let registrar_util = (putil, pid_intitucion) => {

  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_util",
    method: "POST",
    data: {
      util: putil,
      id_institucion: pid_intitucion
      

    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8'

  });

  request.done(function (msg) {
    swal.fire(
      {
        type: 'success',
        title: 'Información de los útiles enviada correctamente.',
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
    listar_util = res.util;
  });

  request.fail(function (jqXHR, textStatus) {

  });

  return listar_util;




};
let buscar_util = (id_util) => {
  let utiles = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_util/" + id_util,
    method: "GET",
    data: {

    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    async: false
  });

  request.done(function (res) {
    utiles = res.util;
  });

  request.fail(function (jqXHR, textStatus) {

  });

  return utiles;
}
let actualizar_util = (pid, putil, pdescripcion) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_util",
    method: "POST",
    data: {
      id: pid,
      util: putil,
      descripcion: pdescripcion
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8'
  });

  request.done(function (res) {
    swal.fire(
      {
        type: 'success',
        title: 'Se ha actualizado correctamente el util y su descripción.',
        text: 'Informacion del util actualizada correctamente.',
        
      }
      );
        onClose:()=>{
          window.location.href()
        }
  }
  );

  request.fail(function (jqXHR, textStatus) {

  });

}