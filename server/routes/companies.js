const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Graviton CRM');
});
router.get('/all', (req, res, next) => {
  res.send('companies/all');
});
router.post('/add', (req, res, next) => {
  res.json('companies/add');
});

router.delete('/delete-company', (req, res, next) => {
  res.send('companies/delete-company');
});

module.exports = router;
