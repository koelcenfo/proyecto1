'use strict';
const seccion = document.querySelector('#tabla_pregunta tbody');
let mostrar_pregunta = () => {
    let pregunta = listar_pregunta();
    let id_institucion = sessionStorage.getItem('id_usuario');
    for (let i = 0; i < pregunta.length; i++) {
        if (pregunta[i]['id_institucion'] == id_institucion) {
            for (let i = 0; i < pregunta.length; i++) {
                let texto = seccion.insertRow();
                texto.insertCell().innerHTML = pregunta[i]['titulo'];
                texto.insertCell().innerHTML = pregunta[i]['pregunta'];
            };
            break;
        } else {
          
        }




    };



};
mostrar_pregunta();
