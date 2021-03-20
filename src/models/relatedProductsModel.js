const mongoose = require('mongoose');

const relatedProductsSchema = new mongoose.Schema([
  {
    relatedId : Number,
    productId: {
      type: Number,
      required: Number,
    },
    related_product_id: Number,
  },
]);

const Related = mongoose.model('Related', relatedProductsSchema);

module.exports = Related;
