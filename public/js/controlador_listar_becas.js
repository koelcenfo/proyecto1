'use strict';
//Vamos a acceder al cuerpo de la tabla por esta razón agregamos el tbody

const tabla_becas = document.querySelector('#tbl_becas tbody');


let mostrar_becas = () => {

    let becas = listar_becas();
    let id_institucion = sessionStorage.getItem('id_usuario');

    for (let i = 0; i < becas.length; i++) {

        //Para que sepa a cual institución debe de redireccionar la informacion de la actividad
        if (becas[i]['id_institucion'] == id_institucion) {  

            let fila = tabla_becas.insertRow();
            /* crear el elemento imagen */
            let imagen = document.createElement('img');
            //fila es como el tr del html
            //innerHTML es el contenido que está adentro del elemento
            fila.insertCell().innerHTML = becas[i]['nombre'];
            fila.insertCell().innerHTML = becas[i]['tipo'];
            fila.insertCell().innerHTML = becas[i]['descripcion'];
        }
    };

};


function filtrar() {
    var tabla = document.getElementById('tbl_becas');
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



mostrar_becas();
