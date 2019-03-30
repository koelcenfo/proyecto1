'use strict'
<<<<<<< HEAD
let listar_pregunta=()=>{
    let listar_pregunta=[];
=======
let listar_pregunta = () => {
    let listar_pregunta = [];
>>>>>>> 17f6465965a330bb9542d79da2e320e89d6d3084
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_pregunta",
        method: "GET",
        data: {
<<<<<<< HEAD
           
            
  
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async:false
  
    });
  
    request.done(function (res) {
       listar_pregunta=res.pregunta;
    });
  
    request.fail(function (jqXHR, textStatus) {
  
    });
return listar_pregunta;
=======



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
>>>>>>> 17f6465965a330bb9542d79da2e320e89d6d3084




};

<<<<<<< HEAD
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
=======
let registrar_pregunta = (ptitulo, ppregunta, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_pregunta",
        method: "POST",
        data: {
            titulo: ptitulo,
            pregunta: ppregunta,
            id_institucion: pid_institucion


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
>>>>>>> 17f6465965a330bb9542d79da2e320e89d6d3084

};
