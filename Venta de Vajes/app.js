// Importar las ciudades desde el módulo
import { barcelona, roma, paris, londres } from './ciudades.js';

// Obtener los enlaces
let enlaces = document.querySelectorAll('a');

// Obtener los elementos para mostrar la información
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

// Agregar evento click a cada enlace
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        // Remover activo de todos los enlaces
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('activo');
        });
        
        // Agregar la clase activo al enlace clickeado
        this.classList.add('activo');

        // Obtener el contenido correspondiente
        let contenido = obtenerContenido(this.textContent);

        // Mostrar el contenido en el DOM
        tituloElemento.innerText = contenido.titulo;
        subtituloElemento.innerText = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});

// Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}