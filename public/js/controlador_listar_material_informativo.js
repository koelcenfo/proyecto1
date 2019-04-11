'use strict';
const tabla_informacion=document.querySelector('#tbl_material_informativo tbody');

let mostrar_informacion=()=>{
    let informacion=listar_material_informativo();
    let id_institucion=sessionStorage.getItem('id_usuario');

    for(let i=0; i<informacion.length; i++){
        if (informacion[i]['id_institucion']==id_institucion) {
            
            let fila=tabla_informacion.insertRow();

            fila.insertCell().innerHTML=informacion[i]['reglamento'];
            fila.insertCell().innerHTML=informacion[i]['proceso_matricula'];
            fila.insertCell().innerHTML=informacion[i]['sistema_evaluacion'];
            fila.insertCell().innerHTML=informacion[i]['recomendaciones'];
            fila.insertCell().innerHTML=informacion[i]['areas_informativas'];
            fila.insertCell().innerHTML=informacion[i]['seccion_ayuda'];
            fila.insertCell().innerHTML=informacion[i]['talleres_adicionales'];
            fila.insertCell().innerHTML=informacion[i]['deportes'];
            fila.insertCell().innerHTML=informacion[i]['informacion_adicional'];

        }
    };
};

function filtrar() {
    var tabla = document.getElementById('tbl_material_informativo');
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

mostrar_informacion();
