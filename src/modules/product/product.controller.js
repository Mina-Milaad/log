import { catchError } from "../../middleware/catchError.js";
import { Product } from "../../../database/models/product.model.js";


const addProduct = catchError(async (req, res, next) => {
    let product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Productt added successfully", product });
})



const getAllProducts = catchError(async (req, res) => {
    let products = await Product.find();
    res.status(200).json({ message: "success", products });
})

const getProductById = catchError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) return next(new AppError("Product not found", 404));
    res.status(200).json({ message: "success", product });
})

const updateProduct = catchError(async (req, res, next) => {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return next(new AppError("Product not found", 404));
    res.status(200).json({ message: "Product updated successfully", product });
})

const deleteProduct = catchError(async (req, res, next) => {
    let product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return next(new AppError("Product not found", 404));
    res.status(200).json({ message: "Product deleted successfully" });
})

export {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}

