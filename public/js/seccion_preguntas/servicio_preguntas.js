'use strict';
let listar_pregunta=()=>{
    let listar_pregunta=[];
    let request=$.ajax({
        url:'http://localhost:4000/api/listar_pregunta',
        method: "GET",
        data:{

        },
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        listar_pregunta=res.pregunta;
    });

    request.fail(function(jqXHR, textStatus){

    });

    return listar_pregunta;
};

//Espacio para el registrar_preguntas 

let registrar_pregunta = (ptitulo,ppregunta) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/registrar_pregunta",
      method: "POST",
      data: {
         titulo:ptitulo,
         pregunta:ppregunta
          

      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'

  });

  request.done(function (msg) {
      swal.fire(
          {
              type: 'success',
              title: 'pregunta enviada de manera correcta'
          });
  });

};
