const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
