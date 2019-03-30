'use strict';
const seccion=document.querySelector('#tabla_pregunta tbody');
let mostrar_pregunta=()=>{
    let pregunta=listar_pregunta();
    for (let i = 0; i < pregunta.length; i++) {
        let texto=seccion.insertRow();
        texto.insertCell().innerHTML=pregunta[i]['titulo'];
        texto.insertCell().innerHTML=pregunta[i]['pregunta'];
        
  
    
    };
    


};
mostrar_pregunta();
