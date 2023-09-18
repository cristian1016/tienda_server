const express = require('express');
const productController = require('../controllers/product-controller');
const ValidateAdmin = require('../middleware/ValidateAdmin')
const router = express.Router();

// Ruta para agregar un producto. Requiere autenticación JWT de ad.
router.post('/', productController.addProduct);





module.exports = router; 