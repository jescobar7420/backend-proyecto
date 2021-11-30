const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 
const EmpleosLista = require('./modulosEmpleos/getEmpleos');
const EmpleoUnico = require('./modulosEmpleos/getUnicoEmpleo');

const configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
}

app.use(cors());
app.use(bodyParser.json());

/* Query para bolsa */
app.get('/Empleos', EmpleosLista.GetEmpleos);
app.get('/Empleos/:id', EmpleoUnico.GetUnicoEmpleo);

app.listen(configuracion, () =>{
    console.log(`Conectando al servidor http://${configuracion.hostname}:${configuracion.port}`);
});