const mongoose = require('mongoose');

const relatedProductsSchema = new mongoose.Schema([
  {
    // relatedId : Number,
    productId: {
      type: Number,
      required: true,
    },
    related_product_ids: [Number],
  },
]);

const Related = mongoose.model('Related', relatedProductsSchema);

module.exports = Related;
