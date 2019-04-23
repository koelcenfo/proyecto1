'use strict';
const tabla_criterio = document.querySelector('#tbl_criterio tbody');

let mostrar_datos = () => {
    let criterio = listar_criterio();


    for (let i = 0; i < criterio.length; i++) {
        let fila = tabla_criterio.insertRow();
        let celda_criterios = fila.insertCell();
        celda_criterios.innerHTML = criterio[0]['criterio'];
        celda_criterios.innerHTML = criterio[0]['criterio2'];
        celda_criterios.innerHTML = criterio[0]['criterio3'];
        celda_criterios.innerHTML = criterio[0]['criterio4'];
        celda_criterios.innerHTML = criterio[0]['criterio5'];
        // 
        let celda_porcentaje = fila.insertCell();
        celda_porcentaje.innerHTML =criterio[0]['porcentaje'];
        celda_porcentaje.innerHTML =criterio[0]['porcentaje2'];
        celda_porcentaje.innerHTML =criterio[0]['porcentaje3'];
        celda_porcentaje.innerHTML =criterio[0]['porcentaje4'];
        celda_porcentaje.innerHTML =criterio[0]['porcentaje5'];
        








            let celda_configuracion = fila.insertCell();
        let boton_editar = document.createElement('a');
        boton_editar.href = `actualizar_criterio_evaluacion.html?id_criterio=${criterio[i]['_id']}`
        boton_editar.textContent = 'Editar';
        celda_configuracion.appendChild(boton_editar);





    }



};
mostrar_datos();