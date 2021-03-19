const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../src/models/productModel');

dotenv.config({ path: '../config.env' });

// To avoid the new line when printing
log = function (d) {
  process.stdout.write(d);
};

// localhost connection
const DB = `mongodb+srv://dbAdmin:${process.env.DB_PASSWORD}@cluster0.cffca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });

// For data collection
let count = 0;

fs.createReadStream('data/product.csv')
  .pipe(csv())
  .on('data', (data) => {
   
    const product = new Product({
      productId: data['id'],
      name: data[' name'],
      description: data[' description'],
      slogan: data[' slogan'],
      category: data[' category'],
    });

    product.save(function (err, item) {
      if (item) {
        count++;
        log(', ' + count);
      }
      if (err) {
        log('Error');
      }
    });
  })
  .on('end', () => {
    count = 0;
    populateStyles();

  });

let styles = [];

const populateStyles = () => { 
    fs.createReadStream('data/styles.csv')
    .pipe(csv())
    .on('data', (data) => {
        console.log(data);
        styles.push({
            id : data['id'],
            name : data['name'],
            sale_price : data['sale_price'],
            original_price : data['original_price']
        })
    })
    .on('end', () => {
        const product = Product.findOneAndUpdate({productId : data['productId']}, { styles } , {
            new : true,
            runValidators : true
          },function (err, item) {
            if (item) {
              count++;
              log(', ' + count);
            }
            if (err) {
              log('Error');
            }
          });

    });
}
