import { Modulo } from "../interfaces/Modulo";

const pool = require('../conexionBD');

const GetModuloIdCurso = async(req:any, res:any) => {
    const id = parseInt(req.params.id);
    
    let ListaModulos = new Array<Modulo>();
    
    pool.query(`SELECT * FROM "Modulos" WHERE "Modulos"."idCurso" = $1`, [id], (err:any, respuesta:any) => {
        if(err) {
            console.log(err);
            return;
        }
        
        for(let row of respuesta.rows) {
            ListaModulos.push(row);
        }
        
        console.log(ListaModulos);
        
        res.send(JSON.stringify({"status":"ok", "items":ListaModulos}));
    })
}

module.exports = {
    GetModuloIdCurso
}