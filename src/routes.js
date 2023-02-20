const express = require("express")
const router = express.Router()

const CategoryController = require("./Controllers/CategoryController");
const ProductController = require("./Controllers/ProductController");

//********************* */ Category*******************************//

router.post('/category', CategoryController.createCategory);

router.get('/categories/:categoryId', CategoryController.getCategorybyid);

router.put("/categories/:categoryId",CategoryController.updateCategory);

router.delete("/categories/:categoryId",CategoryController.deleteCategory);

//**********************  */ Product*******************************//
router.post('/product', ProductController.createProduct);

router.get('/products/:productId', ProductController.getProductById);

router.put('/products/:productId', ProductController.updateProduct);

router.delete("/products/:productId", ProductController.deleteProduct);

router.get('/products', ProductController.productsList);

module.exports = router;