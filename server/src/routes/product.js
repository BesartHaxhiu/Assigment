const express = require('express');
const router = express.Router();

const { getProducts, postProduct, getProductById, updateProductById, deleteProductById } = require('../controllers/product');

router.get('/', getProducts);
router.get('/:productId', getProductById)
router.put('/:productId', updateProductById)
router.post('/', postProduct);
router.delete('/:productId', deleteProductById)

module.exports = router; 