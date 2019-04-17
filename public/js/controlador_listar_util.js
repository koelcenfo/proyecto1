'use strict';
const tabla_util = document.querySelector('#tbl_utiles tbody');
const boton_agregar = document.querySelector('#btn_agregar');

let mostrar_datos = () => {
    let util = listar_util();
    let id_institucion = sessionStorage.getItem('id_usuario');
    for (let i = 0; i < util.length; i++) {
        if (util[i]['id_institucion'] == id_institucion) {
            let fila = tabla_util.insertRow();
            fila.insertCell().innerHTML = util[i]['util'];
            fila.insertCell().innerHTML = util[i]['descripcion'];



        }

    }





};
function filtrar_util() {
    var tabla = document.getElementById('tbl_utiles');
    var busqueda = document.getElementById('txt_filtro_util').value.toLowerCase();
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


mostrar_datos();