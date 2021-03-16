const express = require('express');
const app = express();
const Port = 3000;

// app.use();

app.listen(Port, () => console.log(`Port: ${Port}`));