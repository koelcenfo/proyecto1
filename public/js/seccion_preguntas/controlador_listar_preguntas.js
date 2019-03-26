'use strict';

const tabla_pregunta=document.querySelector('#tbl_preguntas tbody');

let mostrar_pregunta=()=>{

let pregunta=listar_pregunta();

for (let i = 0; i < pregunta.length; i++) {
    
    let fila=tabla_pregunta.insertRow();
    
    fila.insertCell().innerHTML=pregunta[i]['titulo'];
    fila.insertCell().innerHTML=pregunta[i]['pregunta'];

    };

};
mostrar_pregunta();