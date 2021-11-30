import { Empleo } from "../Empleo";

const pool = require('../conexionBD');

const GetUnicoEmpleo = (req:any, res:any) => {
    let id = req.params.idEmpleo;

    pool.query(`SELECT * FROM "Empleos"
                WHERE "Empleos"."idEmpleo" = ?`, id, (err:any, respuesta:any) => {
        if(err) {
            console.log(err);
            return;
        }

        res.send(JSON.stringify(respuesta));
    })
}

module.exports = {
    GetUnicoEmpleo
}