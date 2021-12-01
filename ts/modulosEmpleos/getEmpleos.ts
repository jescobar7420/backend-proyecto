import { Empleo } from "../interfaces/Empleo";

const pool = require('../conexionBD');

const GetEmpleos = (req:any, res:any) => {
    let ListaEmpleos = new Array<Empleo>();

    pool.query(`SELECT * FROM "Empleos"`, (err:any, respuesta:any) => {
        if(err) {
            console.log(err);
            return;
        }
        
        for(let row of respuesta.rows) {
            ListaEmpleos.push(row);
        }
        
        console.log(ListaEmpleos);

        res.send(JSON.stringify({"satus":"ok", "items":ListaEmpleos}));
    })
}

module.exports = {
    GetEmpleos
}