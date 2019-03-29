'use strict';

const tabla = document.querySelector('#tbl_instituciones tbody');

let mostrar_datos = () => {
    
    let institucion = listar_institucion();

    for(let i = 0; i < institucion.length; i++){

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = institucion[i]['institucion_id'];
    };      
};


mostrar_datos();