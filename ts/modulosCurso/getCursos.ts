import { Cursos } from "../interfaces/Curso";

const pool = require('../conexionBD');

const GetCursos = (req:any, res:any) => {
    let ListaCursos = new Array<Cursos>();

    pool.query(`SELECT * FROM "Curso"`, (err:any, respuesta:any) => {
        if(err) {
            console.log(err);
            return;
        }
        
        for(let row of respuesta.rows) {
            ListaCursos.push(row);
        }
        
        console.log(ListaCursos);

        res.send(JSON.stringify({"satus":"ok", "items":ListaCursos}));
    })
}

module.exports = {
    GetCursos
}