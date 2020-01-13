const axios = require("axios"); //Promise based HTTP client for the browser and node.js

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'X-RapidAPI-Key': '3cd854b15amsh4695cce28f62f17p1474d6jsnaa5e919ec35d',
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error("No hay resultados para esta petición");
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }

}

module.exports = {
    getLugarLatLng
}