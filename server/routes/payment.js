const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});
router.get('/all', (req, res, next) => {
  res.json('Получить все платежы');
});
router.get('/add', (req, res, next) => {
  res.json('Добавить платеж');
});

module.exports = router;
