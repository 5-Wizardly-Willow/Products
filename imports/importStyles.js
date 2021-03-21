const mongoose = require('mongoose');
const Style = require('./models/styleModel');

const DB = `mongodb://localhost:27017/sdc`;

function photosLookup(db, styleId) {
  const iphotos = db.connections[0].collection('import_photos');
  return iphotos.find({ styleId: styleId }, {}).toArray();
}

function skusLookup(db, styleId) {
  const iskus = db.connections[0].collection('import_skus');
  return iskus.find({ styleId: styleId }, {}).toArray();
}

async function main() {
  const db = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('connected');
  const istyles = db.connections[0].collection('import_styles');
  istyles.find({}, { limit: 10000 }).each(async (err, p) => { // limit: 50 
    // console.log(p);
    if (p !== null) {
      Style.create({
        styleId: p.id,
        productId: p.productId,
        name: p.name,
        sale_price: p.sale_price  === 'null' ? null : p.sale_price,
        original_price: p.original_price,
        photos: await photosLookup(db, p.id),
        skus: await skusLookup(db, p.id),
      });
    }
  });
  console.log('done.');
}

main();
