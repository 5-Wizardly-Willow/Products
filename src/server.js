const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const productRouter = require('./routes/productRoutes');

dotenv.config({ path: './config.env' });

const app = express();
const Port = 4000;

// const DB = `mongodb+srv://dbAdmin:${process.env.DB_PASSWORD}@cluster0.cffca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const DB_URL = `mongodb://localhost:27017/sdc`;
const DB_OPTIONS = 'minSize=30&poolSize=100';

mongoose.connect(`${DB_URL}?${DB_OPTIONS}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/products', productRouter);

app.listen(Port, () => console.log(`Port: ${Port}`));
