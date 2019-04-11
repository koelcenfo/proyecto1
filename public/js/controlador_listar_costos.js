'use strict';
const tabla_costos = document.querySelector('#tbl_costos');

let mostrar_datos = () => {
    let costos = listar_costo();
    for (let i = 0; i < costos.length; i++) {
        if (costos[i]['id_institucion'] == id_institucion) {
            let fila = tabla_costos.insertRow();

            fila.insertCell().innerHTML = costos[i]['nivel'];
            fila.insertCell().innerHTML = costos[i]['matricula'];
            fila.insertCell().innerHTML = costos[i]['mensualidad'];
        }



    };





};
mostrar_datos();