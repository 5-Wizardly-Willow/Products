const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required : true,
        },
        description : String,
        slogan : String,
        category : String
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;