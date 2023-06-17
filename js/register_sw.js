if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
    .then ((message) => {
        console.log('Service Worker esta listo y funcionando');
    })
} else {
    console.log('Este browser no soporta Service Worker');
}