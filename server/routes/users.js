const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});
router.post('/singin', (req, res, next) => {
  res.json('users/singin');
});

module.exports = router;
