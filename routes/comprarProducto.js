const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();
const ValidateAdmin = require('../middleware/ValidateAdmin')


//Permite realizar la compra de un producto ad.
router.post('/', productController.comprarProducto, ValidateAdmin.njwtAuth);

//njwt:  para verificar que el usuario que intenta comprar el producto es un administrador.



module.exports = router; 