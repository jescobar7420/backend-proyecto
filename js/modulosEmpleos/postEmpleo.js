"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pool = require('../conexionBD');
var PostEmpleo = function (req, res) {
    pool.query("INSERT INTO \"Empleos\" (titulo, empresa, pais, ciudad, imagen, fecha, descripcion, telefono, correo, salario, jornada, verificacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *", [req.body.titulo,
        req.body.empresa,
        req.body.pais,
        req.body.ciudad,
        req.body.imagen,
        req.body.fecha,
        req.body.descripcion,
        req.body.telefono,
        req.body.correo,
        req.body.salario,
        req.body.jornada,
        req.body.verificacion], function (err, respuesta) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(respuesta.rows[0].idEmpleo);
        res.send(JSON.stringify({ "satus": "ok", "item": respuesta.rows[0].id }));
    });
};
module.exports = {
    PostEmpleo: PostEmpleo
};
