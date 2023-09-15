const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router()

// Ruta para actualizar un producto. ad.
router.post('/', productController.updateAProduct); //definimos la ruta

//llamamos al metodo para manejar la logica de actualizacion.


module.exports = router; 