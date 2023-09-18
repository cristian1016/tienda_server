const express = require('express');
const productController = require('../controllers/product-controller');
const ValidateAdmin = require('../middleware/ValidateAdmin')
const router = express.Router();

// Ruta para agregar un producto. Requiere autenticación JWT de administrador.
router.post('/', productController.addProduct);


//productController.addProduct: para manejar la lógica de agregar un producto.


module.exports = router; 