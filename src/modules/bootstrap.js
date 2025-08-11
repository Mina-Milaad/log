import authRouter from './auth/auth.routes.js';
import productRouter from './product/product.routes.js';

export const bootstrap = (app) => {
    app.use('/products', productRouter);
    app.use('/auth', authRouter);
    
}