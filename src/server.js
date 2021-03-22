const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const productRouter = require('./routes/productRoutes');

const app = express();
const Port = config.port;

// const DB = `mongodb+srv://dbAdmin:${process.env.DB_PASSWORD}@cluster0.cffca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/products', productRouter);

app.listen(Port, () => console.log(`Port: ${Port}`));
