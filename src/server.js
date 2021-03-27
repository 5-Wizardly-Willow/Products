require('newrelic');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const productRouter = require('./routes/productRoutes');

const cartRouter = require('./routes/cartRoutes');

dotenv.config({ path: './config.env' });

const app = express();
const Port = 6000;
//sudo docker run -d -p 4000:4000 --name products-api --env DB_URL=host.docker.internal products-api
//docker build -f Dockerfile -t products-api .

// const DB = `mongodb+srv://dbAdmin:${process.env.DB_PASSWORD}@cluster0.cffca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const DB_URL = process.env.DB_URL || `mongodb://localhost:27017/sdc`;
const DB_OPTIONS = process.env.DB_OPTIONS || 'minSize=30&poolSize=500';
mongoose.connect(`${DB_URL}?${DB_OPTIONS}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.use(express.static(path.join(__dirname, 'diskloaderio')));

app.listen(Port, () => console.log(`Port: ${Port}`));
