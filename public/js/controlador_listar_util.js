'use strict';

const tabla = document.querySelector('#tabla_utiles tbody');
const selector_nivel = document.querySelector('#slt_nivel');

let mostrar_datos = () => {
    let utiles = listar_utiles();
    let id_institucion = sessionStorage.getItem('id_usuario');



    for (let i = 0; i < utiles.length; i++) {
        
        if (utiles[i]['id_institucion'] == id_institucion) {

            for (let i = 0; i < utiles.length; i++) {
                let fila = tabla.insertRow();
                fila.insertCell().innerHTML = utiles[i]['util1'];
                fila.insertCell().innerHTML = utiles[i]['descripcion1'];
                fila.insertCell().innerHTML = utiles[i]['cantidad1'];
            };
            for (let i = 0; i < utiles.length; i++) {
                let fila2 = tabla.insertRow();
                fila2.insertCell().innerHTML = utiles[i]['util2'];
                fila2.insertCell().innerHTML = utiles[i]['descripcion2'];
                fila2.insertCell().innerHTML = utiles[i]['cantidad2'];
            };
            for (let i = 0; i < utiles.length; i++) {
                let fila3 = tabla.insertRow();
                fila3.insertCell().innerHTML = utiles[i]['util3'];
                fila3.insertCell().innerHTML = utiles[i]['descripcion3'];
                fila3.insertCell().innerHTML = utiles[i]['cantidad3'];
            };
            for (let i = 0; i < utiles.length; i++) {
                let fila4 = tabla.insertRow();
                fila4.insertCell().innerHTML = utiles[i]['util4'];
                fila4.insertCell().innerHTML = utiles[i]['descripcion4'];
                fila4.insertCell().innerHTML = utiles[i]['cantidad4'];
            };
            for (let i = 0; i < utiles.length; i++) {
                let fila5 = tabla.insertRow();
                fila5.insertCell().innerHTML = utiles[i]['util5'];
                fila5.insertCell().innerHTML = utiles[i]['descripcion5'];
                fila5.insertCell().innerHTML = utiles[i]['cantidad5'];
            };
            for (let i = 0; i < utiles.length; i++) {
                let fila6 = tabla.insertRow();
                fila6.insertCell().innerHTML = utiles[i]['util6'];
                fila6.insertCell().innerHTML = utiles[i]['descripcion6'];
                fila6.insertCell().innerHTML = utiles[i]['cantidad6'];
            };
            for (let i = 0; i < utiles.length; i++) {
                let fila7 = tabla.insertRow();
                fila7.insertCell().innerHTML = utiles[i]['util7'];
                fila7.insertCell().innerHTML = utiles[i]['descripcion7'];
                fila7.insertCell().innerHTML = utiles[i]['cantidad7'];
            };
            for (let i = 0; i < utiles.length; i++) {
                let fila8 = tabla.insertRow();
                fila8.insertCell().innerHTML = utiles[i]['util8'];
                fila8.insertCell().innerHTML = utiles[i]['descripcion8'];
                fila8.insertCell().innerHTML = utiles[i]['cantidad8'];
            };
            for (let i = 0; i < utiles.length; i++) {
                let fila9 = tabla.insertRow();
                fila9.insertCell().innerHTML = utiles[i]['util9'];
                fila9.insertCell().innerHTML = utiles[i]['descripcion9'];
                fila9.insertCell().innerHTML = utiles[i]['cantidad9'];
            };
            for (let i = 0; i < utiles.length; i++) {
                let fila10 = tabla.insertRow();
                fila10.insertCell().innerHTML = utiles[i]['util10'];
                fila10.insertCell().innerHTML = utiles[i]['descripcion10'];
                fila10.insertCell().innerHTML = utiles[i]['cantidad10'];
            };
            break;
        }else{
           
        }

        
    }

    
    

   

};

mostrar_datos();