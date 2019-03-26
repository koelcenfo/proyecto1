'use strict';
//Vamos a acceder al cuerpo de la tabla por esta razón agregamos el tbody

const tabla_actividades=document.querySelector('#tbl_actividades tbody');

let mostrar_actividades=()=>{

let actividades=listar_actividades();

for(let i=0; i< actividades.length; i++){
    
    let fila=tabla_actividades.insertRow();
    //fila es como el tr del html
    //innerHTML es el contenido que está adentro del elemento
    fila.insertCell().innerHTML=actividades[i]['nombre'];
    fila.insertCell().innerHTML=actividades[i]['fecha'];
    fila.insertCell().innerHTML=actividades[i]['hora'];
    fila.insertCell().innerHTML=actividades[i]['lugar'];
    fila.insertCell().innerHTML=actividades[i]['descripcion'];
    // fila.insertCell().innerHTML=actividades[i]['imagen'];//No está definida por el momento

    
    };

};
mostrar_actividades();

const input_filtro=document.querySelector('#txt_filtro');
let lista_actividades=listar_actividades();
mostrar_actividades2();// tiene que estar despues de la carga de la lista de los datos 
input_filtro.addEventListener('keyup',mostrar_actividades2); //funciona para que cada ves que se suelta la tecla se ejecute la funcion 

function mostrar_actividades2(){

    // let lista_actividades=listar_actividades();
    let tbody=document.querySelector('#tbl_actividades tbody');
    let filtro=input_filtro.value;
    tbody.innerHTML='';

    for(let i=0; i<lista_actividades.length; i++){

        if (lista_actividades[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) || lista_actividades[i]['fecha'].toLowerCase().includes(filtro.toLowerCase())|| lista_actividades[i]['hora'].toLowerCase().includes(filtro.toLowerCase()) || lista_actividades[i]['lugar'].toLowerCase().includes(filtro.toLowerCase()) || lista_actividades[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila=tbody.insertRow();

            let nombre=fila.insertCell();
            let fecha=fila.insertCell();
            let hora=fila.insertCell();
            let lugar=fila.insertCell();
            let descripcion=fila.insertCell();
    
            nombre.innerHTML=lista_actividades[i]['nombre'];
            fecha.innerHTML=lista_actividades[i]['fecha']
            hora.innerHTML=lista_actividades[i]['hora'];
            lugar.innerHTML=lista_actividades[i]['lugar'];
            descripcion.innerHTML=lista_actividades[i]['descripcion'];

        }
 
    }

};