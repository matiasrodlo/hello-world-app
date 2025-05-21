const express = require('express');
const path = require('path');
const config = require('./config');
const routes = require('./routes');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Use routes
app.use('/', routes);

const server = app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}!`);
});

// Configure server timeouts
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

module.exports = app; 