import { Cursos } from "../interfaces/Curso";

const pool = require('../conexionBD');

const GetCursoId = async(req:any, res:any) => {
    const id = parseInt(req.params.id);
    
    let Cursos:Cursos;
    
    pool.query(`SELECT * FROM "Curso" WHERE "Curso"."idcurso" = $1`, [id], (err:any, respuesta:any) => {
        if(err) {
            console.log(err);
            return;
        }
        
        Cursos = respuesta.rows;
        console.log(Cursos);
        
        res.send(JSON.stringify(Cursos));
    })
}

module.exports = {
    GetCursoId
}