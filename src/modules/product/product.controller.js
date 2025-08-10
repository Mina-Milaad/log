import { catchError } from "../../middleware/catchError.js";
import { Product } from "../../../database/models/product.model.js";


const addProduct = catchError(async (req, res, next) => {
    let product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Productt added successfully", product });
})


export{
    addProduct
}