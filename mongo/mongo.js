const express = require('express');
const app = express();
const Port = 4000;

// app.use();

app.listen(Port, () => console.log(`Port: ${Port}`));