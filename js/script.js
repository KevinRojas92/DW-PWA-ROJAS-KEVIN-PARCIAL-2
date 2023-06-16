'use strict';

const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?limit=24&list=most_pop_movies';
const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '76a66db868msh7661b2572bec535p1d67acjsn23d92673c089',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};
let arrPleis;

window.addEventListener("load", pelisRandom => {
    try {
        fetch(url, options)
        .then (result => {
            return result.json();
        }).then (json => {
            arrPleis = json.results;

            console.log(arrPleis);

            let ul = document.getElementById("listaPelis");
            arrPleis.forEach(element => {
                ul.innerHTML += `<li><a href="views/detalle.html"><img src="${element.primaryImage.url}" alt="${element.primaryImage.caption.plainText}"></a></li>`;
            });
        })
    } catch (error) {
        console.error(error);
    }
});

let buscador = document.getElementById("buscador");

buscador.addEventListener('change', buscarPelicula => {
    buscarPelicula.preventDefault();

    let busqueda = buscador.value;

    localStorage.setItem("busqueda", `${busqueda}`);
});