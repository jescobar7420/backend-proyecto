"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var EmpleosLista = require('./modulosEmpleos/getEmpleos');
var EmpleoUnico = require('./modulosEmpleos/getUnicoEmpleo');
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
app.use(cors());
app.use(bodyParser.json());
/* Query para bolsa */
app.get('/Empleos', EmpleosLista.GetEmpleos);
app.get('/Empleos/:id', EmpleoUnico.GetUnicoEmpleo);
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://" + configuracion.hostname + ":" + configuracion.port);
});
