const Product = require('../models/productModel');

exports.getAllProducts = async (req, res, next) => {
  try {
    const query = req.query;
    const page = req.query.page * 1 || 1;
    const count = req.query.count * 1 || 5;
    const skip = ( page - 1 ) * count;

    const products = await Product.find().skip(skip).limit(count);

    res.status(200).json({ status : 'success' , data : products });
  } catch (err) {
    res.status(500).json({ error : err });
  }
};

exports.CreateProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ status : 'success' , data : product });
  } catch (err) {
    res.status(500).json({ error : err });
  }
};

exports.UpdateProduct = async (req, res, next) => {
   try {
    const product = await Product.findByIdAndUpdate(req.params.product_id , req.body , {
      new : true,
      runValidators : true
    });
      res.status(200).json({ status : 'success' , data : product });
    } catch (err) {
      res.status(500).json({ error : err });
    }
};

exports.DeleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.product_id);

      res.status(204).json({ status : 'success' , data : null });
    } catch (err) {
      res.status(500).json({ error : err });
    }
};

exports.getProductById = async (req, res, next) => {
  try {
  const product = await Product.findById(req.params.product_id);
    res.status(200).json({ status : 'success' , data : product });
  } catch (err) {
    res.status(500).json({ error : err });
  }
};

exports.getProductStyles = (req, res, next) => {
  res.json({ message: 'Get product Styles' });
};

exports.getRelatedProducts = (req, res, next) => {
  res.json({ message: 'Get related products' });
};
