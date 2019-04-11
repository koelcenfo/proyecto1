'use strict'
let registrar_idioma = (pidiomas) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_idioma",
        method: "POST",
        data: {
            idiomas : pidiomas
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    });

    request.done(function (msg) {
        swal.fire(
          {
            type: 'success',
            title: 'Nuevo idioma registrado',
            text: 'Se envió la información del o los idiomas correctamente.'
          }
        );
      });
    
      request.fail(function (jqXHR, textStatus) {
    
      });
    
    
    
    
    };