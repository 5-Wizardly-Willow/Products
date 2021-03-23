const Cart = require('../models/cartModel');

exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.find();

    res.status(200).json({ status: 'success', data: cart });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.addToCart = async (req, res, next) => {
  try {
    const skuId = req.body.sku_id;
    const quantity = req.body.quantity;
    let productToUpdate = await Cart.findOne({ skuId });
 
    if (productToUpdate) {
      productToUpdate.count += quantity;
      await productToUpdate.save()
    } else {
      await Cart.create({
        skuId,
        count: quantity,
      });
    }

    res.status(201).json({ status: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
