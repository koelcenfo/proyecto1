'use strict'
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

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



