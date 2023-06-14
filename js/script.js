'use strict';

let buscador = document.getElementById("buscador");

buscador.addEventListener('change', buscarPelicula => {
    buscarPelicula.preventDefault();

    let busqueda = buscador.value;

    localStorage.setItem("busqueda", `${busqueda}`);
});