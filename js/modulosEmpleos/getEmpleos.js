"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pool = require('../conexionBD');
var GetEmpleos = function (req, res) {
    var ListaEmpleos = new Array();
    pool.query("SELECT * FROM \"Empleos\"", function (err, respuesta) {
        if (err) {
            console.log(err);
            return;
        }
        for (var _i = 0, _a = respuesta.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            ListaEmpleos.push(row);
        }
        console.log(ListaEmpleos);
        res.send(JSON.stringify({ "satus": "ok", "items": ListaEmpleos }));
    });
};
module.exports = {
    GetEmpleos: GetEmpleos
};
