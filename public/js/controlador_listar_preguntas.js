'use strict';
const seccion = document.querySelector('#tabla_pregunta tbody');
let mostrar_pregunta = () => {
    let pregunta = listar_pregunta();
    let id_institucion = sessionStorage.getItem('id_usuario');
    for (let i = 0; i < pregunta.length; i++) {
        if (pregunta[i]['id_institucion'] == id_institucion) {
            // for (let i = 0; i < pregunta.length; i++) {
                let texto = seccion.insertRow();
                texto.insertCell().innerHTML = pregunta[i]['pregunta'];
                texto.insertCell().innerHTML = pregunta[i]['respuesta'];
        //     };
        //     break;
        // } else {
          
        }




    };



};

function filtrar_pregunta() {
    var tabla = document.getElementById('tabla_pregunta');
    var busqueda = document.getElementById('txt_filtro_pregunta').value.toLowerCase();
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


mostrar_pregunta();