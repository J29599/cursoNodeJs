const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const getInfo = async(direccion) => {
    try {
        let { latitud: lat, longitud: lon } = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(lat, lon);
        return temp;
    } catch (e) {
        return e;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);