'use strict';
const tabla_util = document.querySelector('#tbl_utiles tbody');
const boton_agregar = document.querySelector('#btn_agregar');
const div_contenedor=document.querySelector('#form_contenedor');


let mostrar_datos = () => {
    let util = listar_util();
    let id_institucion = sessionStorage.getItem('id_usuario');
    let tipo_usuario = sessionStorage.getItem('tipo_usuario');
    if (tipo_usuario == 'Institucion') {
        id_institucion = sessionStorage.getItem('id_usuario')
    } else {
        id_institucion = getUrl();
    }
    for (let i = 0; i < util.length; i++) {
        if (util[i]['id_institucion'] == id_institucion) {
            
            let fila = tabla_util.insertRow();
            
            
            let celda_util = fila.insertCell();
            let select_util=document.createElement('select');
            select_util.setAttribute("id","slt_util");
            for (let i = 0; i < util.length; i++) {
                let opcion = new Option(util[i]['util']);
                
                
                select_util.options.add(opcion);
                
                celda_util.appendChild(select_util);
            }
                
                
            
            
            // 
            /* aqui metemos el descripcion Txt */
            let celda_descripcion = fila.insertCell();
            let txt_descripcion = document.createElement('textarea');
            txt_descripcion.setAttribute("id", "txt_descripcion");
            celda_descripcion.appendChild(txt_descripcion);

            // 
            let celda_cantidad = fila.insertCell();
            let input_cantidad = document.createElement('input');
            input_cantidad.type = 'Number';
            input_cantidad.setAttribute("id", "nmb_cantidad");
            celda_cantidad.appendChild(input_cantidad);



            // 
            let celda_configuracion = fila.insertCell();
            let boton_editar = document.createElement('a');
            
            boton_editar.textContent = 'Editar';
            boton_editar.href = `actualizar_util.html?id_util=${util[i]['_id']}`
            celda_configuracion.appendChild(boton_editar);
            tabla_util.appendChild(celda_util);
            tabla_util.appendChild(celda_descripcion);
            tabla_util.appendChild(celda_cantidad);
            tabla_util.appendChild(celda_configuracion);

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