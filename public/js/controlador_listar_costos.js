'use strict';
const tabla_costos = document.querySelector('#tbl_costos tbody');

let mostrar_datos_costos = () => {
    let costos = listar_costo();
    let id_institucion = sessionStorage.getItem('id_usuario');
    for (let i = 0; i < costos.length; i++) {
        if (costos[i]['id_institucion'] == id_institucion) {
            let fila = tabla_costos.insertRow();

            fila.insertCell().innerHTML = costos[i]['nivel'];
            fila.insertCell().innerHTML = costos[i]['matricula'];
            fila.insertCell().innerHTML = costos[i]['mensualidad'];

            let celda_configuracion = fila.insertCell();

            //Creacion del boton de editar
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_costo.html?id_costo=${costos[i]['_id']}`
            celda_configuracion.appendChild(boton_editar);




        };
    }




};
function filtrar_costo() {
    var tabla = document.getElementById('tbl_costos');
    var busqueda = document.getElementById('txt_filtro_costo').value.toLowerCase();
    var cellsOfRow = "";
    var found = false;
    var compareWith = "";
    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1)) {
                found = true;
            }
        }
        if (found) {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}
mostrar_datos_costos();