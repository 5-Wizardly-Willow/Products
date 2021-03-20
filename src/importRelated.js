const mongoose = require('mongoose');
const Related = require('./models/relatedProductsModel');

const DB = `mongodb://localhost:27017/sdc`;

async function main() {
  const db = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('connected');
  const irelated = db.connections[0].collection('import_related');
  irelated.find({}, { limit: 10000 }).each(async (err, result) => { // limit: 50 
    // console.log(p);
    if (result !== null) {
      Related.create({
        productId: result.current_product_id,
        related_product_id: result.related_product_id,
        relatedId : result.id,
      });
    }
  });
  console.log('done.');
}

main();

// ServiceWorkerMessageEvent, kubernetes, docker swarm, graphQl
