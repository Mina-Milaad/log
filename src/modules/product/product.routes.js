import { Router } from "express";
import { addProduct,getAllProducts ,getProductById , updateProduct , deleteProduct} from './product.controller.js';
import { allowoedTo, protectedRoutes } from "../auth/auth.controller.js";

const productRouter = Router();

productRouter.route('/')
        .post(protectedRoutes, allowoedTo("admin"),addProduct)
        .get(protectedRoutes, allowoedTo("admin", "user"), getAllProducts);

productRouter.route('/:id')
        .get(protectedRoutes, allowoedTo("admin", "user"), getProductById)
        .put(protectedRoutes, allowoedTo("admin"), updateProduct)
        .delete(protectedRoutes, allowoedTo("admin"), deleteProduct);

export default productRouter ;