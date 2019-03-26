'use strict';

const tabla = document.querySelector("#tbl_padres tbody");

let mostrar_datos = () => {
    
    let padres = listar_padre();
    
    


   /* for(let i = 0; i < padres.length; i++){
       */
        let i = 2;
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = padres[i]['padre_nombre'];
        fila.insertCell().innerHTML = padres[i]['padre_apellido'];
        fila.insertCell().innerHTML = padres[i]['padre_correo_electronico'];
        fila.insertCell().innerHTML = padres[i]['padre_hijos'];
        fila.insertCell().innerHTML = padres[i]['padre_fecha'];
        fila.insertCell().innerHTML = padres[i]['padre_direccion'];
        fila.insertCell().innerHTML = padres[i]['padre_telefono'];
        fila.insertCell().innerHTML = padres[i]['padre_nacionalidad'];
        fila.insertCell().innerHTML = padres[i]['padre_cedula'];
        fila.insertCell().innerHTML = padres[i]['padre_contrasena'];
        fila.insertCell().innerHTML = padres[i]['padre_imagen'];

    /*};     */ 
};


mostrar_datos();