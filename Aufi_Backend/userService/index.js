const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aufi!');
});

module.exports = app;
