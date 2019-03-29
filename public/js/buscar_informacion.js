'use strict';

const tabla = document.querySelector('#tbl_instituciones tbody');


let mostrar_datos = () => {
    
    let institucion = listar_institucion();

    for(let i = 0; i < institucion.length; i++){

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = institucion[i]['institucion_nombre'];
        fila.insertCell().innerHTML = institucion[i]['institucion_provincia'];
        fila.insertCell().innerHTML = institucion[i]['institucion_tipo'];
        fila.insertCell().innerHTML = document.createElement('a');
        tabla.rows[i].style.display = 'none';
    };          
};

function Buscar() {
    var tabla = document.getElementById('tbl_instituciones');
    var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();
    var cellsOfRow="";
    var found=false;
    var compareWith="";
    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
            {
                found = true;
            }
        }
        if(found)
        {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}

mostrar_datos();