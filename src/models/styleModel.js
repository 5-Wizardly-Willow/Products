const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  thumbnailUrl: String,
  url: String,
}, { _id: false });

const SkuSchema = new mongoose.Schema({
  sku: String,
  quantity: Number,
  size: String,
}, { _id: false });

const styleSchema = new mongoose.Schema([
  {
    styleId: Number,
    productId: {
        type: Number,
        required: Number,
        // index: true
    },
    name: String,
    sale_price: Number,
    original_price: Number,
    photos: [PhotoSchema],
    skus: [SkuSchema],
  },
]);

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;
