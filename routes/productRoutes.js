const ensureAuthenticated = require('../auth');
const { createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteById,
    helloworld } = require('../conrollers/productController');

const router = require('express').Router();

router.post('/', ensureAuthenticated, createProduct); //secure
router.get('/', getProducts);
router.get('/hello',helloworld);
router.get('/:id', getProductById);
router.put('/:id', ensureAuthenticated, updateProductById);//secure
router.delete('/:id', ensureAuthenticated, deleteById);//secure

module.exports = router