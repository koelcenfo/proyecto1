const formulario= document.querySelector('#formulario');
const boton=document.querySelector('#btn_buscar');
const resultado=document.querySelector('#resultado');


const centros_educativos=[
    {nombre: 'Colegio Claretiano'},
    {nombre: 'American international school'},
    {nombre: 'Centro educativo Yori'},
    {nombre: 'Valle dorado'},
    {nombre: 'Liceo Samuel Sáenz'},
    {nombre: 'Instituto educativo ABC'},
    {nombre: 'Escuela Cubujuqui'},
    {nombre: 'Caspari Montessori School'},
    {nombre: 'Centro Educativo Santa Inés'},
    {nombre: 'Liceo Ingeniero Manuel Benavides Rodríguez'},
    {nombre: 'Colegio Técnico Profesional de Limón'},
    {nombre: 'Escuela San Marcos. Limón. Costa Rica'},
    {nombre: 'Colegio Científico Costarricense - Puntarenas'},
    {nombre: 'Colegio Laboratorio Puntarenas'}
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
            <li>${centro_educativo.nombre}</li>
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