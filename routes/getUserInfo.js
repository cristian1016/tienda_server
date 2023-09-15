const express = require('express');
const registerController = require('../controllers/register-controller');
const router = express.Router()

// Ruta para mostrar el perfil de usuario.
router.get('/', registerController.verPerfilUsuario);

//verPerfil:  para manejar la lógica de mostrar el perfil de usuario.

// Cuando se recibe una solicitud GET en esta ruta, se pasa la solicitud al controlador 
//registerController.verPerfilUsuario, que se encarga de recuperar y mostrar la 
//información del perfil del usuario correspondiente.


module.exports = router; 