'use strict';

// BUSCADOR -> https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5bXECu47Zp7_FqDDPNrkg53PfRvDMelQ&q=thor+trailer&type=video&part=snippet

const apiKey = "6fe29fd2";
const apiKey_Buscador = "AIzaSyC5bXECu47Zp7_FqDDPNrkg53PfRvDMelQ";
let objetoPelicula = {};

window.addEventListener("load", cargarTrailer => {
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
                    let body = document.getElementById("body");
                    body.setAttribute("style", `background-image:url(${objeto.Poster});`);

                    let titulo = document.getElementById("titulo");
                    let nombreCompleto = objeto.Title;

                    titulo.innerText = `${nombreCompleto}`;

                    return nombreCompleto;
                }
            })
        } catch (error) {
            console.log("Hubo un arror");
        }
    }
});

let video;

function onYouTubeIframeAPIReady () {
    video = new YT.Player("video", {
        width: '100%',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            playsinline:1,
            autoplay:1,
            controls:0
        },
        events: {
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}

function onPlayerReady (event) {
    event.target.playVideo();
}

let listo = false;

function onPlayerStateChange (event) {
    if (event.data == YT.PlayerState.PLAYING && !listo) {
        setTimeout(stopVideo, 6000);
        listo = true;
    }
}

function stopVideo() {
    video.stopVideo();
}