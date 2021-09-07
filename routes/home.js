const express = require('express');
const router = express.Router();
const {getAll} = require('../models/productos');


// GET
router.get("/", function(req, res) {
    getAll().then((response) => res.status(200).json(response)).catch((e) => res.status(500).json(e))
});
  
module.exports= router;