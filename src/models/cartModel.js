const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    skuId: {
      type: Number,
      required: true,
      unique: true,
    },
    count: Number,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
