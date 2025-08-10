
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title : {
        type : String,
        unique : [true , 'name is required'],
        required : true,
        minLenght : [2 , 'too chort category name']
    },
    description : {
        type : String,
        required : true,
        minLenght : 5,
        maxLength : 2000
    },
    price : {
        type : Number,
        required : true,
        min : 0
    },
}, { timestamps: true, versionKey: false })


export const Product = mongoose.model('Product' , schema)