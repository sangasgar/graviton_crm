const express = require('express');
const { Companies } = require('../db/models');
const { Payments } = require('../db/models');
const auth = require('../middleware/auth');

const router = express.Router();

/* GET home page. */
router.get('/', auth, (req, res, next) => {
  res.send('Graviton CRM');
});
router.get('/all', auth, async (req, res, next) => {
  try {
    const companies = await Companies.findAll({
      order: [
        ['updatedAt', 'DESC'],
      ],
      include: Payments,
    });
    const companiesJson = JSON.parse(JSON.stringify(companies));
    return res.json(companiesJson);
  } catch (error) {
    return res.json({ error: 'Ошибка соеднинения' });
  }
});
router.get('/:id', auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const companies = await Companies.findOne({
      where: { id },
      include: Payments,
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

router.post('/add', auth, async (req, res, next) => {
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

router.delete('/:id', auth, async (req, res, next) => {
  try {
    const { id } = req.params;
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
