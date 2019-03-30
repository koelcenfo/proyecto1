'use strict';

const section_usuario = document.querySelector('#sct_usuario');

let mostrar_datos = () => {
    
   /* let padres = listar_padre();*/
    let instituciones = listar_institucion();
    let tipo_usuario = sessionStorage.getItem('tipo_usuario');
    let id = sessionStorage.getItem('id_usuario');
    switch (tipo_usuario) {
        case "Padre":/*
            for (let i = 0; i < padres.length; i++) {

                if(padres[i]['padre_id'] == id){
                    nombre = padres[i]['padre_nombre'];
                    break;
                }else{
                }
            }
        */
        break;
        case "Institucion":
            for (let i = 0; i < instituciones.length; i++) {

            if(instituciones[i]['institucion_id'] == id){
                    
                section_usuario.innerHTML = '';

                let contenido = document.createElement('div');
                contenido.classList.add('contenido');
                
                    /*Imagen de la institucion*/
                    /**Parte Superior    */
                    let institucion_nombre = document.createElement('h1');
                    institucion_nombre.innerHTML = instituciones[i]['institucion_nombre'];
                    institucion_nombre.classList.add('institucion_nombre');
            
                    let institucion_nombre_inscrito = document.createElement('h3');
                    institucion_nombre_inscrito.innerHTML = instituciones[i]['institucion_nombre_inscrito'];
            
                    let info_div = document.createElement('div');
                    info_div.classList.add('info_div_container');
            
                    let institucion_imagen_div = document.createElement('div');
                    institucion_imagen_div.classList.add('institucion_imagen_div');
            
                    let institucion_imagen = document.createElement('img');
                    institucion_imagen.src = instituciones[i]['institucion_imagen'];
            
                    let info_div_tipo = document.createElement('div');
                    info_div_tipo.classList.add('info_div_tipo');
            
                    let info_div_idioma = document.createElement('div');
                    info_div_idioma.classList.add('info_div_idioma');
            
                    let info_div_genero = document.createElement('div');
                    info_div_genero.classList.add('info_div_genero');
            
                    let info_div_provincia = document.createElement('div');
                    info_div_provincia.classList.add('info_div_provincia');
            
            
                    /**Divs con las imagenes */
            
                    let institucion_tipo = document.createElement('h2');
                    institucion_tipo.innerHTML = instituciones[i]['institucion_tipo'];
                    institucion_tipo.classList.add('info_div');
            
                    let institucion_idiomas = document.createElement('h2');
                    institucion_idiomas.innerHTML = instituciones[i]['institucion_idiomas'];
                    institucion_idiomas.classList.add('info_div');
                    
                    let institucion_generos = document.createElement('h2');
                    institucion_generos.innerHTML = instituciones[i]['institucion_generos'];
                    institucion_generos.classList.add('info_div');
            
                    let institucion_provincia = document.createElement('h2');
                    institucion_provincia.innerHTML = instituciones[i]['institucion_provincia'];
                    institucion_provincia.classList.add('info_div');
            
                    let div_info_izquierda = document.createElement('div');
                    div_info_izquierda.classList.add('div_info_izquierda');
            
                    let div_info_derecha = document.createElement('div');
                    div_info_derecha.classList.add('div_info_derecha');
            
            
            
                    let Niveles = document.createElement('h3');
                    Niveles.innerHTML = "Niveles"
                    Niveles.classList.add('label')
                    
                    let Bachillerato = document.createElement('h3');
                    Bachillerato.innerHTML = "Bachillerato Internacional"
                    Bachillerato.classList.add('label')
                    
                    let Ideologia = document.createElement('h3');
                    Ideologia.innerHTML = "Ideologia"
                    Ideologia.classList.add('label')
                    
                    let fundacion = document.createElement('h3');
                    fundacion.innerHTML = "Fundacion"
                    fundacion.classList.add('label')
                    
                    let referencia = document.createElement('h3');
                    referencia.innerHTML = "Referencia"
                    referencia.classList.add('label')
                    
                    /***** */
            
                    let Canton = document.createElement('h3');
                    Canton.innerHTML = "Canton"
                    Canton.classList.add('label')
                    
                    let Distrito = document.createElement('h3');
                    Distrito.innerHTML = "Distrito"
                    Distrito.classList.add('label')
                    
                    let Direccion = document.createElement('h3');
                    Direccion.innerHTML = "Direccion"
                    Direccion.classList.add('label')
                    
                    let Sitio_web = document.createElement('h3');
                    Sitio_web.innerHTML = "Sitio web"
                    Sitio_web.classList.add('label')
                    
                    let Fax = document.createElement('h3');
                    Fax.innerHTML = "Fax"
                    Fax.classList.add('label')
            
            
            
                    let institucion_niveles = document.createElement('h3');
                    institucion_niveles.innerHTML = instituciones[i]['institucion_niveles'];
                    institucion_niveles.classList.add('info')
            
                    let institucion_bachillerato_internacional = document.createElement('h3');
                    institucion_bachillerato_internacional.innerHTML = instituciones[i]['institucion_bachillerato_internacional'];
                    institucion_bachillerato_internacional.classList.add('info')
            
                    let institucion_ideologia = document.createElement('h3');
                    institucion_ideologia.innerHTML = instituciones[i]['institucion_ideologia'];
                    institucion_ideologia.classList.add('info')
            
                    let institucion_fundacion = document.createElement('h3');
                    institucion_fundacion.innerHTML = instituciones[i]['institucion_fundacion'];
                    institucion_fundacion.classList.add('info')
            
                    let institucion_referencia = document.createElement('h3');
                    institucion_referencia.innerHTML = instituciones[i]['institucion_referencia'];
                    institucion_referencia.classList.add('info')
            
            
                    let institucion_canton = document.createElement('h3');
                    institucion_canton.innerHTML = instituciones[i]['institucion_canton'];
                    institucion_canton.classList.add('info')
            
                    let institucion_distrito = document.createElement('h3');
                    institucion_distrito.innerHTML = instituciones[i]['institucion_distrito'];
                    institucion_distrito.classList.add('info')
            
                    let institucion_direccion = document.createElement('h3');
                    institucion_direccion.innerHTML = instituciones[i]['institucion_direccion'];
                    institucion_direccion.classList.add('info')
            
            
                    let institucion_sitio_web = document.createElement('h3');
                    institucion_sitio_web.innerHTML = instituciones[i]['institucion_sitio_web'];
                    institucion_sitio_web.classList.add('info')
            
                    let institucion_fax = document.createElement('h3');
                    institucion_fax.innerHTML = instituciones[i]['institucion_fax'];
                    institucion_fax.classList.add('info')
                    
                    contenido.appendChild(institucion_imagen_div);
                    institucion_imagen_div.appendChild(institucion_imagen);
                    contenido.appendChild(institucion_nombre);
                    contenido.appendChild(info_div);
                    info_div.appendChild(info_div_tipo);
                    info_div.appendChild(info_div_idioma);
                    info_div.appendChild(info_div_genero);
                    info_div.appendChild(info_div_provincia);
                    info_div.appendChild(institucion_tipo);
                    info_div.appendChild(institucion_idiomas);
                    info_div.appendChild(institucion_generos);
                    info_div.appendChild(institucion_provincia);
                    div_info_izquierda.appendChild(Niveles);
                    div_info_izquierda.appendChild(institucion_niveles);
                    div_info_izquierda.appendChild(Bachillerato);
                    div_info_izquierda.appendChild(institucion_bachillerato_internacional);
                    div_info_izquierda.appendChild(Ideologia);
                    div_info_izquierda.appendChild(institucion_ideologia);
                    div_info_izquierda.appendChild(fundacion);
                    div_info_izquierda.appendChild(institucion_fundacion);
                    div_info_izquierda.appendChild(referencia);
                    div_info_izquierda.appendChild(institucion_referencia);
                    div_info_derecha.appendChild(div_info_izquierda);
                    div_info_derecha.appendChild(Canton);
                    div_info_derecha.appendChild(institucion_canton);
                    div_info_derecha.appendChild(Distrito);
                    div_info_derecha.appendChild(institucion_distrito);
                    div_info_derecha.appendChild(Direccion);
                    div_info_derecha.appendChild(institucion_direccion);
                    div_info_derecha.appendChild(Sitio_web);
                    div_info_derecha.appendChild(institucion_sitio_web);
                    div_info_derecha.appendChild(Fax);
                    div_info_derecha.appendChild(institucion_fax);
                    contenido.appendChild(div_info_izquierda);
                    contenido.appendChild(div_info_derecha);
                    section_usuario.appendChild(contenido);



                    break;
            }else{
            }
            }
        break;

    }

   
};


mostrar_datos();