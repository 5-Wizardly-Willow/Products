const mongoose = require('mongoose');
const Product = require('../src/models/productModel');

/*
1. mongoimport -> import collection 1>1 per CSV
2. final collections to be used from web-app
3. import.js script read import collection, aggregate and write final collections.



*/

// const DB = `mongodb+srv://dbAdmin:${process.env.DB_PASSWORD}@cluster0.cffca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const DB = `mongodb://localhost:27017/sdc`;

function featuresLookup (db, productId) {
    const ifeatures = db.connections[0].collection('import_features');
    return ifeatures.find({ productId: productId }, {}).toArray();  
}

async function main() {
    const db = await mongoose.connect(DB , {useNewUrlParser: true, useUnifiedTopology: true});

    console.log('connected');
    const iproducts = db.connections[0].collection('import_product');
    iproducts.find({}, { /* limit: 10000 */ }).each(async (err, p)  => { // limit: 100000
        //console.log(p);
        if (p !== null && p.id !== 'id') {
            Product.create({
                productId: p.id,
                name: p.name,
                slogan: p.slogan,
                description: p.description,
                category: p.category,
                features: await featuresLookup(db, p.id)
            }).catch(e => console.log(e, p));
        }
    });
    console.log('done.');
}

main();
