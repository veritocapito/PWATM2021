//Rutas para crear usuarios

const express = require('express');
const router = express.Router();
const usuarioController= require('../controllers/usuarioController');
// validaremos usando express-validator
const {check} = require('express-validator');

// implementar jsonwebtoken

const jwt = require('jsonwebtoken');

//api/usuarios
router.post('/', 
[
    check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('email', 'Agregar un email valido').isEmail(),
    check('password', 'El password debe contener minimo 6 caracteres').isLength({min: 6})
],

    usuarioController.crearUsuario
)

module.exports= router;

