"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log("Clase Inicializada");
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: '',
            password: '',
            database: 'node'
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.connection.query(query, (err, res, fields) => {
            if (err) {
                console.log("Error");
                console.log(err);
                return callback(err);
            }
            if (res.length === 0) {
                callback('El registro no existe');
            }
            else {
                callback(null, res);
            }
        });
    }
    conectarDB() {
        this.connection.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log("Base de datos online");
        });
    }
}
exports.default = MySQL;
