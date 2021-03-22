const mongoose = require('mongoose');
const Related = require('../src/models/relatedProductsModel');

const DB = `mongodb://localhost:27017/sdc`;

async function main() {
  const db = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('connected');
  const irelated = db.connections[0].collection('import_related');
  let productId = 0;
  let related_product_ids;
  // limit: 50
  irelated
    .find({ limit: 10 }, {})
    .sort({ current_product_id: 1 })
    .each(async (err, result) => {
      if (result !== null) {
        if (productId !== result.current_product_id) {
          // check if moved into a new product

          // save completed product
          if (related_product_ids) {
            Related.create({
              productId: productId,
              related_product_ids: related_product_ids,
            });
          }

          // read new product
          productId = result.current_product_id;
          related_product_ids = [];
        }
        if (!related_product_ids.includes(result.related_product_id)) {
          related_product_ids.push(result.related_product_id);
        }
      } else {
        // process last entry
        if (related_product_ids) {
          Related.create({
            productId: productId,
            related_product_ids: related_product_ids,
          });
        }
      }
    });
  console.log('done.');
}

main();

// ServiceWorkerMessageEvent, kubernetes, docker swarm, graphQl
