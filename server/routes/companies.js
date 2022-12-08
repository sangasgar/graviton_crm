const express = require('express');
const { Companies } = require('../db/models');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Graviton CRM');
});
router.get('/all', async (req, res, next) => {
  try {
    const companies = await Companies.findAll({
      order: [
        ['updatedAt', 'DESC'],
      ],
    });
    const companiesJson = JSON.parse(JSON.stringify(companies));
    return res.json(companiesJson);
  } catch (error) {
    return res.json({ error: 'Ошибка соеднинения' });
  }
});
router.post('/add', async (req, res, next) => {
  try {
    const {
      name, phone, email, comment,
    } = req.body;
    if (name && phone) {
      const companies = await Companies.create({
        name,
        phone,
        email,
        comment,
        balance: 0,
      });
      const companiesJsonCreateStatus = JSON.parse(JSON.stringify(companies)).name === name;
      return res.json({ createCompaniesStatus: companiesJsonCreateStatus });
    }
    return res.json({ createCompaniesStatus: false });
  } catch (error) {
    return res.json({ createCompaniesStatus: false });
  }
});

router.delete('/delete-company', async (req, res, next) => {
  try {
    const { id } = req.body;
    if (id) {
      const companies = await Companies.destroy({ where: { id } });
      const companiesJsonDeleteStatus = companies === 1;
      return res.json({ companiesDeleteStatus: companiesJsonDeleteStatus });
    }
    return res.json({ companiesDeleteStatus: false });
  } catch (error) {
    return res.json({ companiesDeleteStatus: false });
  }
});

module.exports = router;
