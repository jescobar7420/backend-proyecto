"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
/* const poolBD = require('./conexionBD'); */
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
// CONEXIÓN A LA DB
var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});
app.use(cors());
app.use(bodyParser.json());
app.get('/Ciudades', function (req, res) {
    var ListaCiudades = new Array();
    pool.query("SELECT * FROM \"City\"", function (err, respuesta) {
        if (err) {
            console.log(err);
            return;
        }
        for (var _i = 0, _a = respuesta.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            ListaCiudades.push(row);
        }
        console.log(ListaCiudades);
        res.send(JSON.stringify({ "status": "ok", "items": ListaCiudades }));
    });
});
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://" + configuracion.hostname + ":" + configuracion.port);
});
