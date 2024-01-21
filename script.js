// script.js

// Ejemplo: Cambiar el texto de un elemento al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    var tituloAnime = document.getElementById('anime');
    if (tituloAnime) {
        tituloAnime.innerHTML = 'Anime Recomendado';
    }
});

// Ejemplo: Mostrar una alerta al hacer clic en el botón Descargar Ahora
var botonDescargar = document.getElementById('botonDescargar');
if (botonDescargar) {
    botonDescargar.addEventListener('click', function() {
        alert('¡Descarga iniciada! Disfruta del contenido.');
    });
}

// Puedes agregar más funciones y lógica según tus necesidades
