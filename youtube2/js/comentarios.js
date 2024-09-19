document.querySelector('.comentarios button').addEventListener('click', function() {
    // Obtiene el valor del campo de texto dentro del contenedor '.comentarios'
    var comentario = document.querySelector('.comentarios input').value;
    
    // Verifica si el campo de texto no está vacío
    if (comentario.trim() !== '') {
        // Crea un nuevo elemento <p> para mostrar el comentario
        var nuevoComentario = document.createElement('p');
        
        // Establece el contenido del nuevo elemento <p> como el texto del comentario
        nuevoComentario.textContent = comentario;
        
        // Añade una clase CSS 'comentario-texto' al nuevo elemento <p> para aplicar estilos
        nuevoComentario.classList.add('comentario-texto');
        
        // Añade el nuevo elemento <p> al contenedor '.comentarios'
        document.querySelector('.comentarios').appendChild(nuevoComentario);
        
        // Limpia el campo de texto después de añadir el comentario
        document.querySelector('.comentarios input').value = ''; // Limpiar la caja de texto
    }
});
