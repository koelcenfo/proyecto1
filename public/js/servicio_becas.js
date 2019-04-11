'use strict';

let registrar_becas=(pnombre,ptipo,pdescripcion)=>{
    let request=$.ajax({
        url: 'http://localhost:4000/api/registrar_becas',
        method: "POST",
        data: {
            nombre: pnombre,
            tipo: ptipo,
            descripcion: pdescripcion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: '!La beca ha sido registrada de forma exitosa!',
            text: `Saludos estimado(a) la beca ha sido registrada a su centro educativo.`
        });
    });
}