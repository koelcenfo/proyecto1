'use strict';
const tabla_utiles=document.querySelector('#tbl_utiles tbody');

let mostrar_utiles=()=>{
    let utiles=listar_utiles_mep();
    let id_institucion=sessionStorage.getItem('id_usuario');
    
    for(let i=0; i<utiles.length; i++){
        if (utiles[i]['id_institucion']==id_institucion) {
            
            let fila=tabla_utiles.insertRow();
            // let nuevo_input=document.createElement('input');
            // nuevo_input={type: Number};

            fila.insertCell().innerHTML=utiles[i]['nombre_util'];
            fila.insertCell().innerHTML=utiles[i]['cantidad'];
            // let celda_cantidad=fila.insertCell();
            // celda_cantidad.appendChild(nuevo_input);
            fila.insertCell().innerHTML=utiles[i]['descripcion'];
            
        };
    };
};

function filtrar() {
    var tabla = document.getElementById('tbl_utiles');
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

mostrar_utiles();
