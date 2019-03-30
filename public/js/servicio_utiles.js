'use strict';
let listar_utiles = () => {
    let listar_utiles = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_util",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listar_utiles = res.utiles;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listar_utiles;
};

let registrar_utiles = (pnivel, putil1, putil2, putil3, putil4, putil5, putil6, putil7, putil8, putil9, putil10, pdescrp1, pdescrp2, pdescrp3, pdescrp4, pdescrp5, pdescrp6, pdescrp7, pdescrp8, pdescrp9, pdescrp10, pcantdd1, pcantdd2, pcantdd3, pcantdd4, pcantdd5, pcantdd6, pcantdd7, pcantdd8, pcantdd9, pcantdd10, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_util",
        method: "POST",
        data: {
            nivel: pnivel,
            util1: putil1,
            util2: putil2,
            util3: putil3,
            util4: putil4,
            util5: putil5,
            util6: putil6,
            util7: putil7,
            util8: putil8,
            util9: putil9,
            util10: putil10,
            descripcion1: pdescrp1,
            descripcion2: pdescrp2,
            descripcion3: pdescrp3,
            descripcion4: pdescrp4,
            descripcion5: pdescrp5,
            descripcion6: pdescrp6,
            descripcion7: pdescrp7,
            descripcion8: pdescrp8,
            descripcion9: pdescrp9,
            descripcion10: pdescrp10,
            cantidad1: pcantdd1,
            cantidad2: pcantdd2,
            cantidad3: pcantdd3,
            cantidad4: pcantdd4,
            cantidad5: pcantdd5,
            cantidad6: pcantdd6,
            cantidad7: pcantdd7,    
            cantidad8: pcantdd8,
            cantidad9: pcantdd9,
            cantidad10: pcantdd10,
            id_institucion : pid_institucion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

    });
    request.done(function (res) {
        console.log(res.id_institucion);
        
        swal.fire(
            {
                type: 'success',
                title: 'lista de utiles enviada de manera correcta'
            });
    });

    request.fail(function (jqXHR, textStatus) {
            
    });

};
