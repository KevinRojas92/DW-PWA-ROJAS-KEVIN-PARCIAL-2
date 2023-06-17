'use strict';

let main = document.getElementById("main");
let divStatus;

window.addEventListener("offline", checStatus => {
    divStatus = document.createElement("div");
    divStatus.setAttribute("id", "statusConexion");
    divStatus.innerHTML += "<p>Se perdió la conexión a internet</p>";
    main.appendChild(divStatus);
});

window.addEventListener("online", checStatus => {
    divStatus = document.createElement("div");
    divStatus.setAttribute("id", "statusConexion");
    divStatus.innerHTML += "<p>Volvió la conexión a internet</p>";
    main.appendChild(divStatus);
});

if (!navigator.onLine) {
    console.log("El usuario está sin conexión");
}