const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json('Graviton CRM');
});
router.get('/all', (req, res, next) => {
  res.json('leads/all');
});
router.post('/add', (req, res, next) => {
  res.json('leads/add');
});

router.delete('/delete-lead', (req, res, next) => {
  res.json('leads/delete-lead');
});

router.put('/update-status', (req, res, next) => {
  res.json('leads/update-status');
});

router.put('/lead-send', (req, res, next) => {
  res.json('leads/lead-send');
});

module.exports = router;
