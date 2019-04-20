'use strict';
const tabla_util = document.querySelector('#tbl_utiles tbody');
const boton_agregar = document.querySelector('#btn_agregar');
const td = document.querySelector('#tbl_utiles tbody td');


let mostrar_datos = () => {
    let util = listar_util();
    let id_institucion = sessionStorage.getItem('id_usuario');
    let slt_util = document.querySelector('#slt_util');
    for (let i = 0; i < util.length; i++) {
        if (util[i]['id_institucion'] == id_institucion) {

            let fila = tabla_util.insertRow();
            let opcion = new Option(util[i]['util']);
            opcion.value = util[i]['_id'];

            let utiles = fila.insertCell();
            slt_util.options.add(opcion);
            utiles.appendChild(slt_util);

            fila.insertCell().innerHTML = util[i]['descripcion'];
            let celda_configuracion = fila.insertCell();
            let boton_editar = document.createElement('a');

            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_util.html?id_util=${util[i]['_id']}`
            celda_configuracion.appendChild(boton_editar);

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