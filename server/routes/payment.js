/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Payments } = require('../db/models');
const { Companies } = require('../db/models');
const db = require('../db/models');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});
router.get('/all', (req, res, next) => {
  res.json('Получить все платежы');
});
router.post('/add', async (req, res, next) => {
  try {
    const { company_id, payment_sum, comment } = req.body;
    if (company_id && payment_sum && payment_sum > 0) {
      const t = await db.sequelize.transaction();
      const payment = await Payments.create({ company_id, price: payment_sum, comment }, { transaction: t });
      const company = JSON.parse(JSON.stringify(await Companies.findOne({ where: { id: company_id } })));
      const balanceUpdate = company.balance + Number(payment_sum);
      const companyUpdate = await Companies.update({ id: company_id, balance: balanceUpdate }, { where: { id: company.id } }, { transaction: t });
      const paymentJsonCreateStatus = JSON.parse(JSON.stringify(payment)).price === Number(payment_sum);
      const companyUpdateBalance = companyUpdate[0] === 1;
      t.commit();
      return res.json({ createPaymentStatus: paymentJsonCreateStatus, companyUpdateBalance });
    }
    return res.json({ createPaymentStatus: false, companyUpdateBalance: false });
  } catch (error) {
    return res.json({ createPaymentStatus: false, companyUpdateBalance: false });
  }
});

module.exports = router;
