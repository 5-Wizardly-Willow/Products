const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema([
  {
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : 'Product'
    },
    feature: String,
    value: String
  },
]);

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;
