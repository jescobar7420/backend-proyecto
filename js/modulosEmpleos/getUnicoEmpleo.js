"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pool = require('../conexionBD');
var GetUnicoEmpleo = function (req, res) {
    var id = req.params.idEmpleo;
    pool.query("SELECT * FROM \"Empleos\"\n                WHERE \"Empleos\".\"idEmpleo\" = ?", id, function (err, respuesta) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(JSON.stringify(respuesta));
    });
};
module.exports = {
    GetUnicoEmpleo: GetUnicoEmpleo
};
