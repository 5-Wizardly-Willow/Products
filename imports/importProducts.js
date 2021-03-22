const MongoClient = require('mongodb');
const mongoose = require('mongoose');
const Product = require('../src/models/productModel');

/*
1. mongoimport -> import collection 1>1 per CSV
2. final collections to be used from web-app
3. import.js script read import collection, aggregate and write final collections.



*/

// const DB = `mongodb+srv://dbAdmin:${process.env.DB_PASSWORD}@cluster0.cffca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const IMPORT_DB = `mongodb://localhost:27017`;
const DB = `mongodb://localhost:27017/${process.env.DB_NAME}`;

function featuresLookup(db, productId) {
  const ifeatures = db.collection('import_features');
  return ifeatures.find({ productId: productId }, {}).toArray();
}

async function mongoConnect(uri, dbName) {
  const client = await new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const conn = await client.connect();
  return conn.db(process.env.dbName);
}

async function main() {
  const db = await mongoConnect(IMPORT_DB, process.env.DB_NAME_IMPORT);
  console.log('db', db);
  const target = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });

  console.log('connected');
  const iproducts = db.collection('import_product');
  console.log('iproducts', iproducts);
  iproducts
    .find({ }, { limit: 10 })
    // limit: 100000
    .each(async (err, p) => {
      console.log(p);
      if (p !== null && p.id !== 'id') {
        Product.create({
          productId: p.id,
          name: p.name,
          slogan: p.slogan,
          description: p.description,
          category: p.category,
          features: await featuresLookup(db, p.id),
        }).catch((e) => console.log(e, p));
      }
    });
  console.log('done.');
}

main();
