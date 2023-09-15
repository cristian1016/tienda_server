const express = require('express');
const productController = require('../controllers/product-controller');
const ValidateAdmin = require('../middleware/ValidateAdmin')
const router = express.Router();

// Ruta para agregar un producto. Requiere autenticación JWT de administrador.
router.post('/', productController.addProduct);


//productController.addProduct: Se utiliza el método addProduct del controlador 
//de productos productController para manejar la lógica de agregar un producto.


module.exports = router; 