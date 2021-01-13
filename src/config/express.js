const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../api/routes');

const app = express();

// parse body params and attache them to req.body
// @HACK: increase the size of request payload
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
app.use(routes);

module.exports = app;