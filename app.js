// express = require('express');
// var app = express();
// app.listen(3000);

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send("Hola Clase PWA TM 2021")
    res.send(
        `
        <html>
            <head></head>
            <body>
                <p>PAGINA DE INICIO</p>
            </body>
        </html>
        `
    )
});

app.listen(port, () => {
    console.log(`servidor escuchando en url+port: http://localhost:${port}`);
});

