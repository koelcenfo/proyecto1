'use strict';

const tabla = document.querySelector('#tabla_utiles tbody');


let mostrar_datos = () => {
    let utiles = listar_util();

    for (let i = 0; i < utiles.length; i++) {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = utiles[i]['util'];
        fila.insertCell().innerHTML = utiles[i]['descripcion'];
        fila.insertCell().innerHTML = utiles[i]['cantidad'];
    };

};
mostrar_datos();
