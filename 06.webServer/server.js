const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public')); //Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.

//Express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
// app.set('views', __dirname + '/views');  ¿Por qué funciona igual?
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'pipe'
    });
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.listen(3000, () => console.log("Escuchando en el puerto 3000"));