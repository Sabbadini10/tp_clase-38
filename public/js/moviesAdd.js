window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

// ------------------------------------------
function coloresRandom(){
    let generarColores = '0123456789ABCDEF';
    let code = '#';
    for (var i = 0; i < 6; i++) {
       code = code + generarColores[Math.floor(Math.random() * 16)];
       /*inicio con el # concateno el string de numeros y letras le paso la funcion math.random
    y la multiplico por 16 asi se van generando nuevos colores
     */
    }
    return code;
}
    
titulo.addEventListener('mouseover', (event) => {
    titulo.style.color = coloresRandom();
})
}