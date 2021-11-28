const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 

const configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
}

app.use(cors());
app.use(bodyParser.json());

app.listen(configuracion, () =>{
    console.log(`Conectando al servidor http://${configuracion.hostname}:${configuracion.port}`);
});