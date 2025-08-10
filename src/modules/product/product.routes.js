import { Router } from "express";
import { addProduct } from './product.controller.js';

const productRouter = Router();

productRouter.route('/').post(addProduct);

export default productRouter ;