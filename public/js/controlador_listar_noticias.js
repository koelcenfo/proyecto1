'use strict';
const tabla_noticias=document.querySelector('#tbl_noticias tbody');

let mostrar_noticias=()=>{
    let noticias=listar_noticias();
    let id_institucion=sessionStorage.getItem('id_usuario');

    for(let i=0; i<noticias.length; i++){
        if (noticias[i]['id_institucion']==id_institucion) {

            let fila=tabla_noticias.insertRow();

            let imagen=document.createElement('img');

            fila.insertCell().innerHTML=noticias[i]['titulo'];
            fila.insertCell().innerHTML=noticias[i]['fecha'];
            fila.insertCell().innerHTML=noticias[i]['hora'];
            fila.insertCell().innerHTML=noticias[i]['lugar'];
            fila.insertCell().innerHTML=noticias[i]['descripcion'];
            let celda_imagen=fila.insertCell();
            celda_imagen.appendChild(imagen);

            if (noticias[i]['imagen']) {
                imagen.src = noticias[i]['imagen'];
            } else {
                imagen.src = 'img/noticias/image-placeholder.png'
            }


            
        }
    };

};

function filtrar() {
    var tabla = document.getElementById('tbl_noticias');
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

mostrar_noticias();