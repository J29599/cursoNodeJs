var socket = io();

socket.on('connect', function() {
    console.log("Conectado al servidor");
});

//Escuchar información
socket.on('disconnect', function() {
    console.log("Perdimos conexion con el servidor");
});

//Enviar información al servidor
socket.emit('enviarMensaje', {
    usuario: 'pepe',
    mensaje: 'pepeMensaje'
}, function(resp) {
    console.log("Server: ", resp);
});

//Escuchar información del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});