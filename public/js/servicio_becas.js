'use strict';

let registrar_becas=(pid_institucion, pnombre,ptipo,pdescripcion)=>{
    let request=$.ajax({
        url: 'http://localhost:4000/api/registrar_becas',
        method: "POST",
        data: {
            id_institucion: pid_institucion,
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
let listar_becas=()=>{
    let listar_becas=[];
    let request=$.ajax({
        url: "http://localhost:4000/api/listar_becas", //se usa el mismo nombre que se pone en el route
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        listar_becas=res.becas;
    });

    request.fail(function(jqXHR, textStatus){

    });

    return listar_becas;

};