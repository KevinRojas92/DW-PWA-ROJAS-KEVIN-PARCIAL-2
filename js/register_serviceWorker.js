'use strict';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../serviceWorker.js')
    .then (menesaje => {
        console.log("ServiceWorker está listo y funcionando");
    })
} else {
    console.log('Este Browser no soporta ServiceWorker');
}