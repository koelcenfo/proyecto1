'use strict';
const tabla_criterio = document.querySelector('#tbl_criterio tbody');

let mostrar_datos = () => {
    let criterio = listar_criterio();
    
    let id_institucion = sessionStorage.getItem('id_usuario');
    for (let i = 0; i < criterio.length; i++) {
        
        if (criterio[i]['id_institucion'] == id_institucion) {
            let fila = tabla_criterio.insertRow();
            fila.insertCell().innerHTML = criterio[i]['criterio'];
            fila.insertCell().innerHTML = criterio[i]['porcentaje'];
            
        };
        for (let i = 0; i < criterio.length; i++) {
            let fila = tabla_criterio.insertRow();
            fila.insertCell().innerHTML = criterio[i]['criterio2'];
            fila.insertCell().innerHTML = criterio[i]['porcentaje2'];
        }
        for (let i = 0; i < criterio.length; i++) {
            let fila = tabla_criterio.insertRow();
            fila.insertCell().innerHTML = criterio[i]['criterio3'];
            fila.insertCell().innerHTML = criterio[i]['porcentaje3'];
        }
        for (let i = 0; i < criterio.length; i++) {
            let fila = tabla_criterio.insertRow();
            fila.insertCell().innerHTML = criterio[i]['criterio4'];
            fila.insertCell().innerHTML = criterio[i]['porcentaje4'];
        }
        for (let i = 0; i < criterio.length; i++) {
            let fila = tabla_criterio.insertRow();
            fila.insertCell().innerHTML = criterio[i]['criterio5'];
            fila.insertCell().innerHTML = criterio[i]['porcentaje5'];
        }
        
    }



};
mostrar_datos();