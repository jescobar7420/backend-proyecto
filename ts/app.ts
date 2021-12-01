const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 
/* Empleos */
const EmpleosLista = require('./modulosEmpleos/getEmpleos');
const EmpleoUnico = require('./modulosEmpleos/getEmpleoId');
const InsertarEmpleo = require('./modulosEmpleos/postEmpleo');
/* Cursos */
const CursosLista = require('./modulosCurso/getCursos');
const CursoId = require('./modulosCurso/getCursoId');

/* Modulos */
const ModulosIdLista = require('./modulosModulo/getModuloIdCurso');

const configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
}

app.use(cors());
app.use(bodyParser.json());

/* Query para bolsa */
app.get('/Empleos/:id', EmpleoUnico.GetEmpleoId);
app.get('/Empleos', EmpleosLista.GetEmpleos);
app.post('/AgregarEmpleo', bodyParser.json(), InsertarEmpleo.PostEmpleo);

/* Query para cursos */
app.get('/Cursos', CursosLista.GetCursos);
app.get('/Cursos/:id', CursoId.GetCursoId);

/* Query para modulos */
app.get('/Modulos/:id', ModulosIdLista.GetModuloIdCurso);

app.listen(configuracion, () =>{
    console.log(`Conectando al servidor http://${configuracion.hostname}:${configuracion.port}`);
});


