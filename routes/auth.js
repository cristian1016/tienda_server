const express = require('express');
const authController = require('../controllers/auth-controller');
const validatorAuth = require('../middleware/auth-validator');
const router = express.Router();

// Ruta para autenticar un usuario y validar los parámetros de la solicitud.
router.post('/', validatorAuth.validatorParams, validatorAuth.validator, authController.auth);

//validatorAuth.validatorParams: Se utiliza un middleware para validar los 
///parámetros de la solicitud, lo que significa que se comprueba si la solicitud 
//contiene todos los campos necesarios para la autenticación (email y contraseña).


//validatorAuth.validator: Otro middleware se utiliza para validar los datos del usuario, 
//como el formato del email o la contraseña.


//authController.auth: para llevar a cabo la lógica de autenticación del usuario.

module.exports = router; 