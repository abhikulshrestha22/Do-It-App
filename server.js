const express = require('express');
const mongoose = require('./db');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());




const routes = require('./routes/index');
//const routes = require('./routes/index')(app);

app.use('/',routes);

app.listen(port, () => console.log(`Listening on port ${port}`));