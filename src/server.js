const express = require('express');
const productRouter = require('./routes/productRoutes')

const app = express();
const Port = 4000;

app.use('/products', productRouter)

app.listen(Port, () => console.log(`Port: ${Port}`));