const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router; 