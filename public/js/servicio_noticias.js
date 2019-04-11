'use strict';

let listar_noticias=()=>{
    let listar_noticias=[];
    let request=$.ajax({
        url: "http://localhost:4000/api/listar_noticias",
        method: "GET",
        data: {
            
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        listar_noticias=res.noticias;
    });
    request.fail(function(jqXHR, textStatus){

    });

    return listar_noticias;
};

let registrar_noticias=(ptitulo,pfecha,phora,plugar,pdescripcion, pid_institucion, pimagen)=>{
    let request=$.ajax({
        url: "http://localhost:4000/api/registrar_noticias",
        method: "POST",
        data:{
            titulo: ptitulo,
            fecha: pfecha,
            hora: phora,
            lugar: plugar,
            descripcion : pdescripcion,
            id_institucion: pid_institucion,
            imagen : pimagen
        },
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: '¡Noticia enviada de forma exitosa!',
            text: `Saludos estimado(a) usuario la noticia "${ptitulo}" ha sido registrada en el sistema.`
        });
    });
}