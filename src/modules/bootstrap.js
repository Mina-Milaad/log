import productRouter from './product/product.routes.js';

export const bootstrap = (app) => {
    app.use('products', productRouter);
    
}