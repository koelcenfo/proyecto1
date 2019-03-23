'use strict';

let registrar_pregunta = (ptitulo,ppregunta) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/registrar_pregunta",
      method: "POST",
      data: {
         titulo:ptitulo,
         pregunta:ppregunta
          

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
