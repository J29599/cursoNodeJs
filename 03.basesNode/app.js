// console.log(module); elemento global
// console.log(process.argv); elemento global
const argv = require('yargs').command;

const { crearArchivo } = require('./multiplicar/multiplicar')

let argv = process.argv;
let argv2 = argv[2];
// let base = parametro.split("=")[1];


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${archivo}`))
//     .catch(e => console.log(e));