require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.PORT);