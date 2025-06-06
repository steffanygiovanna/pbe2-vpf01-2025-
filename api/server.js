const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./src/routes'); 

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5346, () => {
    console.log('API espondendo em http://localhost:5346');
});