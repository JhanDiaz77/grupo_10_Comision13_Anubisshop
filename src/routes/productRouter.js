const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')
const uploadFile = require('../middlewares/uploadProducts');
const userSession = require('../middlewares/userSession');

/* Todos los productos */
router.get('/', productController.index);

/* Creacion de productos
router.get('/create', productController.create);
router.post('/', uploadFile.single('image'), productController.addProduct);  */

/* Edicion de productos */
/* router.get('/edit/:id', productController.edit);
router.put('/:id', uploadFile.single('image'), productController.addEdit); 
 */
/* Detalle de productos */
router.get('/detail/:id', productController.detail);

/* Eliminar producto */
/* router.delete('/:id', productController.delete) */

/* Carrito de productos */
router.get('/cart', userSession ,productController.productCart);


module.exports = router;
