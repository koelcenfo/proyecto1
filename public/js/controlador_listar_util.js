'use strict';
const tabla=document.querySelector('#tabla_utiles tbody');
let mostrar_datos=()=>{
   let utiles=listar_utiles();
   
   for(let i=0;i<utiles.length;i++) {
       let fila=tabla.insertRow();
       fila.insertCell().innerHTML=utiles[i]['util1'];
       fila.insertCell().innerHTML=utiles[i]['descripcion1'];
       fila.insertCell().innerHTML=utiles[i]['cantidad1'];
      
       
       
       
     
   };
   for (let i = 0; i < utiles.length; i++) {
       let fila=tabla.insertRow();
       fila.insertCell().innerHTML=utiles[i]['util2'];
       fila.insertCell().innerHTML=utiles[i]['descripcion2'];
       fila.insertCell().innerHTML=utiles[i]['cantidad2'];
       
       
   };

   for (let i = 0; i < utiles.length; i++) {
    let fila=tabla.insertRow();
    fila.insertCell().innerHTML=utiles[i]['util3'];
    fila.insertCell().innerHTML=utiles[i]['descripcion3'];
    fila.insertCell().innerHTML=utiles[i]['cantidad3'];
    
    
};

for (let i = 0; i < utiles.length; i++) {
    let fila=tabla.insertRow();
    fila.insertCell().innerHTML=utiles[i]['util4'];
    fila.insertCell().innerHTML=utiles[i]['descripcion4'];
    fila.insertCell().innerHTML=utiles[i]['cantidad4'];
    
    
};
for (let i = 0; i < utiles.length; i++) {
    let fila=tabla.insertRow();
    fila.insertCell().innerHTML=utiles[i]['util5'];
    fila.insertCell().innerHTML=utiles[i]['descripcion5'];
    fila.insertCell().innerHTML=utiles[i]['cantidad5'];
    
    
};
for (let i = 0; i < utiles.length; i++) {
    let fila=tabla.insertRow();
    fila.insertCell().innerHTML=utiles[i]['util6'];
    fila.insertCell().innerHTML=utiles[i]['descripcion6'];
    fila.insertCell().innerHTML=utiles[i]['cantidad6'];
    
    
};
for (let i = 0; i < utiles.length; i++) {
    let fila=tabla.insertRow();
    fila.insertCell().innerHTML=utiles[i]['util7'];
    fila.insertCell().innerHTML=utiles[i]['descripcion7'];
    fila.insertCell().innerHTML=utiles[i]['cantidad7'];
    
    
};
for (let i = 0; i < utiles.length; i++) {
    let fila=tabla.insertRow();
    fila.insertCell().innerHTML=utiles[i]['util8'];
    fila.insertCell().innerHTML=utiles[i]['descripcion8'];
    fila.insertCell().innerHTML=utiles[i]['cantidad8'];
    
    
};
for (let i = 0; i < utiles.length; i++) {
    let fila=tabla.insertRow();
    fila.insertCell().innerHTML=utiles[i]['util9'];
    fila.insertCell().innerHTML=utiles[i]['descripcion9'];
    fila.insertCell().innerHTML=utiles[i]['cantidad9'];
    
    
};
for (let i = 0; i < utiles.length; i++) {
    let fila=tabla.insertRow();
    fila.insertCell().innerHTML=utiles[i]['util10'];
    fila.insertCell().innerHTML=utiles[i]['descripcion10'];
    fila.insertCell().innerHTML=utiles[i]['cantidad10'];
    
    
};








};
mostrar_datos();