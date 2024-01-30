import express from 'express';
import { showAllProduct, specificProduct } from '../../controller/user/product.controller';
const productRoute = express.Router();

productRoute.get('/showall-product', showAllProduct);
productRoute.get('/show-product', specificProduct)

export default productRoute