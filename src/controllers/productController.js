const Product = require('../models/productModel');
const Related = require('../models/relatedProductsModel');
const Style = require('../models/styleModel');

exports.getAllProducts = async (req, res, next) => {
  try {
    const query = req.query;
    const page = req.query.page * 1 || 1;
    const count = req.query.count * 1 || 5;
    const skip = (page - 1) * count;

    const products = await Product.find().skip(skip).limit(count);

    res.status(200).json({ status: 'success', data: products });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.CreateProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ status: 'success', data: product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.UpdateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.product_id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({ status: 'success', data: product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.DeleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.product_id);

    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findOne({ productId: req.params.product_id });
    res.status(200).json({ status: 'success', data: product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getProductStyles = async (req, res, next) => {
  try {
    // console.log(req.params);
    const styles = await Style.find({
      productId: parseInt(req.params.product_id),
    });
    res.status(200).json({ status: 'success', data: styles });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.getRelatedProducts = async (req, res, next) => {
  try {
    const related = await Related.find({
      productId: parseInt(req.params.product_id),
    });
    res.status(200).json({ status: 'success', data: related });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
