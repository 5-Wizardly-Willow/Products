const mongoose = require('mongoose');

const 

const productSchema = new mongoose.Schema({
    productId : {
        type : Number,
        required : true,
    },
    name : {
        type: String,
        required : true,
    },
    description : String,
    slogan : String,
    category : String,
    features : [
        {
            feature: String,
            value: String
        }
    ],
    styles : [
        {
            styleId : String,
            name : String,
            price : String,
            salePrice : String,
            photos : [
                {
                    thumbnailUrl : String,
                    url : String,
                }
            ],
            specs : [
                {
                    sku : String,
                    quantity :Number,
                    size : String
                }
            ]
        }
    ],
    related : [
       Number
    ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;