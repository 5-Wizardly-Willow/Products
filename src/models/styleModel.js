const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema([
  {
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : 'Product'
    },
    name: String,
    sale_price: Number,
    original_price: Number,
  },
]);

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;
