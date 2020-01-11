// setTimeout(() => {
//     console.log("Hola Mundo");
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Pepe",
        id
    }

    if (id === 20) {
        callback("El usuario no existe en la BD");
    } else {
        callback(null, usuario);
    }
};

getUsuarioById(20, (err, usuario) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Usuario: ", usuario);
    }
});