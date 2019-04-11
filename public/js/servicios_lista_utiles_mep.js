'use strict';

let listar_utiles_mep=()=>{
    let listar_utiles_mep=[];
    let request=$.ajax({
        url:"http://localhost:4000/api/listar_utiles_mep",
        method: "GET",
        data:{

        },
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        listar_utiles_mep=res.lista_utiles_mep;
    });
    request.fail(function(jqXHR, textStatus){

    });

    return listar_utiles_mep;
};

let registrar_lista_utiles_mep=(pnombre_util,pcantidad,pdescripcion,pid_institucion)=>{
    let request=$.ajax({
        url: "http://localhost:4000/api/registrar_lista_utiles_mep",
        method: "POST",
        data:{
            nombre_util: pnombre_util,
            cantidad: pcantidad,
            descripcion: pdescripcion,
            id_institucion: pid_institucion
        },
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: '¡Útiles enviados de forma exitosa!',
            text: `Saludos estimado(a) usuario los útiles "${pnombre_util}" han sido registrados en el sistema.`
        });
    });
}