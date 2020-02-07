require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/users'));


mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err)
        throw new Error("Error db");

    console.log("DB online");
});

app.listen(process.env.PORT, () => console.log("Escuchando en el puerto 3000"));