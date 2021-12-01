import { Empleo } from "../interfaces/Empleo";

const pool = require('../conexionBD');

const GetEmpleoId = async(req:any, res:any) => {
    const id = parseInt(req.params.id);
    
    let Empleo:Empleo;
    
    pool.query(`SELECT * FROM "Empleos" WHERE "Empleos"."idEmpleo" = $1`, [id], (err:any, respuesta:any) => {
        if(err) {
            console.log(err);
            return;
        }
        
        Empleo = respuesta.rows;
        console.log(Empleo);
        
        res.send(JSON.stringify(Empleo));
    })
}

module.exports = {
    GetEmpleoId
}