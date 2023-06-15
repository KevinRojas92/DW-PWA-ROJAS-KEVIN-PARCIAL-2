'use strict';

const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?limit=5&list=most_pop_movies';
const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '76a66db868msh7661b2572bec535p1d67acjsn23d92673c089',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
    const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
    console.error(error);
}

let buscador = document.getElementById("buscador");

buscador.addEventListener('change', buscarPelicula => {
    buscarPelicula.preventDefault();

    let busqueda = buscador.value;

    localStorage.setItem("busqueda", `${busqueda}`);
});