'use strict';

//http://www.omdbapi.com/?t=thor&apikey=6fe29fd2

const apiKey = "6fe29fd2";
let objetoPelicula = {};

window.addEventListener("load", cargarPelicula => {
    let pelicula = localStorage.getItem("busqueda");

    if (pelicula.length > 0) {
        console.log("hay algo");
    
        try {
            fetch(`http://www.omdbapi.com/?t=${pelicula}&plot=full&apikey=${apiKey}`)
            .then (datos => {
                objetoPelicula = datos.json();

                return  objetoPelicula;
            }).then (objeto => {
                if (objeto.Response == "False") {
                    console.log("No hay pelicula");
                } else {
                    let titulo = document.getElementById("titulo");
                    titulo.innerText = `${objeto.Title}`;

                    let body = document.getElementById("body");
                    body.setAttribute("style", `background-image:url(${objeto.Poster});`);

                    let intro = document.getElementById("intro");
                    intro.innerText = `${objeto.Plot}`;

                    let listaActores = objeto.Actors;
                    let arrActores = listaActores.split(',');
                    arrActores.forEach(element => {
                        let actores = document.getElementById("actores");
                        actores.innerHTML += `<li>${element}</li>`;
                    });
                    

                    console.log(listaActores);
                    console.log(arrActores);
                }
            })
        } catch (error) {
            console.log("Hubo un arror");
        }
    }
});