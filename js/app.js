const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();

function cargarEventListeners(){
    listaCursos.addEventListener('click',agregarCurso)
}

function agregarCurso(e) {
    
    
    if (target && target.classList.contains('agregar-carrito')) {
        console.log(target.parentElement.parentElement)
    }
    
}


function leerDatosCurso() {
    
}