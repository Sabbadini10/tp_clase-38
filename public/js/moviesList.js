window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let enlaces = document.querySelectorAll('a')

    /* let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    } */

    let figure = document.querySelector('figure');
    let modoOscuro = figure.addEventListener('mouseover', (event) => {
        body.style.backgroundColor = '#7f7f7f'
        enlaces.forEach(enlace => {
            enlace.style.color = 'white'
        });

    } )

    let modoClaro = figure.addEventListener('mouseout', (event) => {
        body.style.backgroundColor = 'white'
        enlaces.forEach(enlace => {
            enlace.style.color = 'teal'
        });
    } )
    

    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}