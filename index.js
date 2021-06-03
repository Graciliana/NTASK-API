const express = require('express');
const consign = require('consign');

const PORT = 3000;

const app = express();

app.set('json spaces', 4);

consign()

app.listen(PORT, () => console.log(`NTASK-API = porta ${PORT} ok`));
