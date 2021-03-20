const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  thumbnailUrl: String,
  url: String,
});

const SkuSchema = new mongoose.Schema({
  sku: String,
  quantity: Number,
  size: String,
});

const styleSchema = new mongoose.Schema([
  {
    productCode: Number,
    name: String,
    sale_price: Number,
    original_price: Number,
    photos: [PhotoSchema],
    skus: [SkuSchema],
  },
]);

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;
