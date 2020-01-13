import mysql = require('mysql');

export default class MySQL {
    private static _instance: MySQL;

    connection: mysql.Connection;
    conectado: boolean = false;

    constructor() {
        console.log("Clase Inicializada");
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: '',
            password: '',
            database: 'node'
        });
        this.conectarDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static ejecutarQuery(query: string, callback: any) {
        this.instance.connection.query(query, (err, res: Object[], fields) => {
            if (err) {
                console.log("Error");
                console.log(err);
                return callback(err);
            }
            if (res.length === 0) {
                callback('El registro no existe');
            } else {
                callback(null, res);
            }
        });
    }

    private conectarDB() {
        this.connection.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message)
                return;
            }
            this.conectado = true;
            console.log("Base de datos online");
        });
    }

}