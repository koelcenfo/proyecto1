const formulario= document.querySelector('#formulario');
const boton=document.querySelector('#btn_buscar');
const resultado=document.querySelector('#resultado');


const centros_educativos=[
    {nombre: 'Colegio Claretiano', pagina: 'https://www.google.com/'},
    {nombre: 'American international school', pagina: 'https://www.google.com/'},
    {nombre: 'Centro educativo Yori', pagina: 'https://www.google.com/'},
    {nombre: 'Valle dorado', pagina: 'https://www.google.com/'},
    {nombre: 'Liceo Samuel Sáenz', pagina: 'https://www.google.com/'},
    {nombre: 'Instituto educativo ABC', pagina: 'https://www.google.com/'},
    {nombre: 'Escuela Cubujuqui', pagina: 'https://www.google.com/'},
    {nombre: 'Caspari Montessori School', pagina: 'https://www.google.com/'},
    {nombre: 'Centro Educativo Santa Inés', pagina: 'https://www.google.com/'},
    {nombre: 'Liceo Ingeniero Manuel Benavides Rodríguez', pagina: 'https://www.google.com/'},
    {nombre: 'Colegio Técnico Profesional de Limón', pagina: 'https://www.google.com/'},
    {nombre: 'Escuela San Marcos. Limón. Costa Rica', pagina: 'https://www.google.com/'},
    {nombre: 'Colegio Científico Costarricense - Puntarenas', pagina: 'https://www.google.com/'},
    {nombre: 'Colegio Laboratorio Puntarenas', pagina: 'https://www.google.com/'}
]

// const enlazar=()=>{
//     resultado.value=`<a></a> ${centros_educativos.nombre}`
// };

// if (nombre=='Liceo Samuel Sáenz') {
//     nombre='https://www.google.com/';
// }

const filtrar=()=>{
    // console.log(formulario.value);
    resultado.innerHTML='';
    const texto=formulario.value.toLowerCase();

    for(let centro_educativo of centros_educativos){
        let nombre= centro_educativo.nombre.toLowerCase();
        if (nombre.indexOf(texto)!== -1) {
            resultado.innerHTML += `
            <li>${centro_educativo.nombre} -> pagina: ${centro_educativo.pagina}</li>
            `
            resultado.innerHTML 
        } 
    }
    if (resultado.innerHTML==='') {
        resultado.innerHTML += `
            <li>Centro educativo no encontrado...</li>
        `
    }
};

boton.addEventListener('click',filtrar);