const axios = require("axios"); //Promise based HTTP client for the browser and node.js

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=44dcd78df277642014c9c60b3e58e9dd&units=metric`)
    return resp.data.main.temp;
}



module.exports = {
    getClima
}