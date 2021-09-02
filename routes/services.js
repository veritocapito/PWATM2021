const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => {
    res.send("Estoy en SERVICIOS")
});
  
// PUT


// POST
router.post("/", (req, res) => {
    res.send(
        `
        <html>
        <head></head>
        <body>
        <p>Metodo POST de SERVICIOS</p>
        </body>
        </html>
        `
    );
});

module.exports= router;