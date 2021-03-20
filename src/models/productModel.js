const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema(
    {
      feature: String,
      value: String
    }
);
  
  
const productSchema = new mongoose.Schema(
    {
        productId: {
            type: Number,
            required : true,
            // index: unique
        },
        name : {
            type: String,
            required : true,

        },
        description : String,
        slogan : String,
        category : String,
        features: [featureSchema]
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;