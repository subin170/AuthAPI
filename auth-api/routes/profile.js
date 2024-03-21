const express = require('express');
const router = express.Router();

// Profile route
router.get('/', (req, res) => {
  res.send('Profile page');
});

module.exports = router;
