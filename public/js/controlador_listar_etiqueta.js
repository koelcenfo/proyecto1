'use strict';
const tabla = document.querySelector('#tbl_etiquetas');

let mostrar_datos = () => {
    let etiquetas = listar_etiqueta();
    for (let i = 0; i < etiquetas.length; i++) {

        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = etiquetas[i]['etiqueta'];
        fila.insertCell().innerHTML = etiquetas[i]['descripcion'];
        

    };



};
function filtrar() {
    var tabla = document.getElementById('tbl_etiquetas');
    var busqueda = document.getElementById('txt_filtro').value.toLowerCase();
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