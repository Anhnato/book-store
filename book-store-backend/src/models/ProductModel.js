const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        name: { type: String, require: true},
        image: { type: String, require: true},
        author: { type: String, require: true},
        description: { type: String, require: true},
    },
    {
        timestamps: true
    }
);
const Product = mongoose.model("Product", userSchema);
module.exports = Product;