'use strict'


function herramientas(){

let usuario = sessionStorage.getItem('tipo_usuario');
let listas_de_institucion = document.querySelector('#listas_de_institucion');
let info = document.querySelector('#info');
    
    if (usuario == 'Institucion') {
        listas_de_institucion.style.display = 'block';
        info.style.display = 'none'; 
    }else{
        listas_de_institucion.style.display = 'none'; 
        info.style.display = 'block';
    }


};



