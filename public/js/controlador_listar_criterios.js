'use strict';
const tabla_criterio = document.querySelector('#tbl_criterio');
let mostrar_datos = () => {
    let criterio = listar_criterio();
    for (let i = 0; i < criterio.length; i++) {
        let fila = tabla_criterio.insertRow();
        fila.insertCell().innerHTML = criterio[i]['criterio'];
        fila.insertCell().innerHTML = criterio[i]['criterio2'];
        fila.insertCell().innerHTML = criterio[i]['criterio3'];
        fila.insertCell().innerHTML = criterio[i]['criterio4'];
        fila.insertCell().innerHTML = criterio[i]['criterio5'];
        
        fila.insertCell().innerHTML = criterio[i]['porcentaje'];
        fila.insertCell().innerHTML = criterio[i]['porcentaje2'];
        fila.insertCell().innerHTML = criterio[i]['porcentaje3'];
        fila.insertCell().innerHTML = criterio[i]['porcentaje4'];
        fila.insertCell().innerHTML = criterio[i]['porcentaje5'];
        
        
        
        
    }



};
mostrar_datos();