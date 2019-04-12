'use strict';

// import { link } from "fs";

// const lista = document.querySelector('#lista_instituciones');
// const boton_perfil = document.getElementsByClassName('link');
// let mostrar_datos = () => {
    
//     let institucion = listar_institucion();
//     sessionStorage.removeItem('id_perfil');
//     for (let i = 0; i < institucion.length; i++) {
//         var nombre = document.createElement('h2');
//         nombre.innerHTML = institucion[i]['institucion_nombre'];
//         lista.appendChild(nombre);
//         const perfil = document.createElement('a');
//         perfil.classList.add('link');
//         const linkText = document.createTextNode("Visitar");
//         perfil.appendChild(linkText);
//         perfil.title = institucion[i]['institucion_nombre'];
//         perfil.href = 'http://localhost:3000/public/perfil.html?/'+institucion[i]['institucion_id'];
//         lista.appendChild(perfil);
//     }

 
// };


var tabla = document.getElementById('tbl_instituciones');
let mostrar_datos = () => {
    
    let institucion = listar_institucion();

    for(let i = 0; i < institucion.length; i++){

        let fila = tabla.insertRow();

        let imagen = fila.insertCell();

        let imagen_perfil = document.createElement('img');

        imagen_perfil.src = institucion[i]['institucion_imagen'];
        
        imagen_perfil.classList.add('imagen_buscar');

        imagen.appendChild(imagen_perfil);
       
        fila.insertCell().innerHTML = institucion[i]['institucion_nombre'];
        
        fila.insertCell().innerHTML = institucion[i]['institucion_provincia'];

        fila.insertCell().innerHTML = institucion[i]['institucion_tipo'];



        let link_perfil =fila.insertCell();

        let boton_perfil = document.createElement('a');
        
        boton_perfil.classList.add('link');
        
        boton_perfil.textContent = 'Visitar';

        boton_perfil.href ='http://localhost:3000/public/perfil.html?/'+institucion[i]['institucion_id'];

        link_perfil.appendChild(boton_perfil);
        
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
};
// function Buscar() {

//     // var section = document.getElementById('#lista_instituciones');

//     let section = listar_institucion();

//     var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();

//     var celdas="";

//     var encontrado=false;

//     var comparar="";

//     /**obtiene la cantidad de celdas que hay */
//     for (var i = 1; i < section.length; i++) {

//         /**Se le asigna el elemento que haya en el td al arreglo celdas*/
//         celdas = section[i].getElementsByTagName('td');
//         /**Variable que no encontró coincidencias */
//         encontrado = false;
        
//         for (var j = 0; j < celdas.length && !encontrado; j++) { comparar = celdas[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (comparar.indexOf(busqueda) > -1))
//             {
//                 encontrado = true;
//             }
//         }
//         if(encontrado)
//         {
//             section[i].style.display = '';
//         } else {
//             section[i].style.display = 'none';
//         }
//     }
// }

mostrar_datos();