'use strict';
const tabla_citas=document.querySelector('#tbl_citas tbody');

let mostrar_citas=()=>{
let citas=listar_citas();

for(let i=0; i< citas.length; i++){
    
    let fila=tabla_citas.insertRow();
    
    fila.insertCell().innerHTML=citas[i]['nombre_cita'];
    fila.insertCell().innerHTML=citas[i]['nombre_familiar'];
    fila.insertCell().innerHTML=citas[i]['fecha'];
    fila.insertCell().innerHTML=citas[i]['hora'];
    fila.insertCell().innerHTML=citas[i]['descripcion'];

    };

};

mostrar_citas();

const input_filtro=document.querySelector('#txt_filtro');
//el listar_citas -> es el que llama el servicio y establece la petición
let lista_citas=listar_citas();// se pone al aquí al inicio para que se ejecute desde el inicio a la hora de cargar la página
mostrar_citas2();// tiene que estar despues de la carga de la lista de los datos 
input_filtro.addEventListener('keyup',mostrar_citas2); //(keyup)->funciona para que cada ves que se suelta la tecla se ejecute la funcion, la de mostrar_citas2


function mostrar_citas2(){

    // let lista_actividades=listar_actividades();
    let tbody=document.querySelector('#tbl_citas tbody');
    let filtro=input_filtro.value;/*creo una variable que se llame filtro y le decimos que va a hacer igual a lo 
    que el input del filtro tiene escrito como valor*/
    tbody.innerHTML='';

/*este ciclo es que hace que se agreguen cada uno de los datos de la tabla  */
    for(let i=0; i<lista_citas.length; i++){
        /*cuando la condición se cumpla se vayan a imprimir las filas */    
        if (lista_citas[i]['nombre_cita'].toLowerCase().includes(filtro.toLowerCase()) || lista_citas[i]['nombre_familiar'].toLowerCase().includes(filtro.toLowerCase())|| lista_citas[i]['fecha'].toLowerCase().includes(filtro.toLowerCase()) || lista_citas[i]['hora'].toLowerCase().includes(filtro.toLowerCase()) || lista_citas[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila=tbody.insertRow();
            //Lo que dice la condición es que si incluye un filtro, entonces que lo muestre.
            /*Se le pone toLowerCase() para que me compare el nombre_cita en minúscula, por ende el filtro tambien hay
            que asegurarse que también de que sea pasado a minúscula*/ 
            //En conclusión esto es para que en la página en el campo del filtrar se pueda buscar la información allí, ya sea en mayúscula o en minúscula
            
            let nombre_cita=fila.insertCell();
            let nombre_familiar=fila.insertCell();
            let fecha=fila.insertCell();
            let hora=fila.insertCell();
            let descripcion=fila.insertCell();
    
            nombre_cita.innerHTML=lista_citas[i]['nombre_cita'];
            nombre_familiar.innerHTML=lista_citas[i]['nombre_familiar']
            fecha.innerHTML=lista_citas[i]['fecha'];
            hora.innerHTML=lista_citas[i]['hora'];
            descripcion.innerHTML=lista_citas[i]['descripcion'];

        }
 
    }

};