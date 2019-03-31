'use strict';

const lista = document.querySelector('#lista_instituciones');
const boton_perfil = document.getElementsByClassName('link');
let mostrar_datos = () => {
    
    let institucion = listar_institucion();
    sessionStorage.removeItem('id_perfil');
    for (let i = 0; i < institucion.length; i++) {
        
        var nombre = document.createElement('h2');
        nombre.innerHTML = institucion[i]['institucion_nombre'];
        lista.appendChild(nombre);
        const perfil = document.createElement('a');
        perfil.classList.add('link');
        const linkText = document.createTextNode("Visitar");
        perfil.appendChild(linkText);
        perfil.title = institucion[i]['institucion_nombre'];
        perfil.href = 'http://localhost:3000/public/perfil.html?/'+institucion[i]['institucion_id'];
        lista.appendChild(perfil);
    }

 
};

function Buscar() {

    var tabla = document.getElementById('#lista_instituciones');

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