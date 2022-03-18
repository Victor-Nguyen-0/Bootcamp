const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A product title is required!!!"],
        maxlength: [30, "The title's length can be no more than 30 characters!"],
    },

    price: {
        type: Number,
        required: [true, "A price is required!!!"],
    },

    description: {
        type: String,
        required: [true, "A description is required!!!"],
        maxlength:[100, "The description's length can be no more than 100 characters!"],
    }
}, {timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// different validation types of use: 
// max/min for numbers
// type: Boolean (for true/false yes/no)
// enum: [
//     "option1",
//     "option2",
//     "etc"
// ]
