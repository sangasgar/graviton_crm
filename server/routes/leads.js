/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Leads } = require('../db/models');
const { Leads_type } = require('../db/models');
const { Companies } = require('../db/models');
const { Statuses } = require('../db/models');
const db = require('../db/models');
const auth = require('../middleware/auth');

const router = express.Router();

/* GET home page. */
router.get('/', auth, (req, res, next) => {
  res.json('Graviton CRM');
});
router.get('/all', auth, async (req, res, next) => {
  try {
    const leads = await Leads.findAll({
      order: [
        ['updatedAt', 'DESC'],
      ],
      include: [Leads_type,
        Companies,
        Statuses],
    });
    const leadsJson = JSON.parse(JSON.stringify(leads));
    return res.json(leadsJson);
  } catch (error) {
    return res.json({ error: 'Ошибка соеднинения' });
  }
});
router.post('/add', auth, async (req, res, next) => {
  try {
    const {
      lead_type_id, company_id, lead_name, lead_phone, comment,
    } = req.body;
    if (lead_type_id && lead_name && lead_phone) {
      const leads = await Leads.create({
        lead_type_id,
        company_id,
        lead_name,
        lead_phone,
        status_id: 1,
        comment,
      });
      const leadsJsonCreateStatus = JSON.parse(JSON.stringify(leads)).lead_phone === lead_phone;
      return res.json({ createLeadStatus: leadsJsonCreateStatus });
    }
    return res.json({ createLeadStatus: false });
  } catch (error) {
    return res.json({ createLeadStatus: false });
  }
});

router.route('/:id')
  .get(auth, async (req, res, next) => {
    const { id } = req.params;
    try {
      const leads = await Leads.findOne({
        where: { id },
        include: [Leads_type,
          Companies,
          Statuses],
      });
      const leadsJson = JSON.parse(JSON.stringify(leads));
      return res.json(leadsJson);
    } catch (error) {
      return res.json({ error: 'Ошибка соеднинения' });
    }
  })
  .delete(auth, async (req, res, next) => {
    try {
      const { id } = req.params;
      if (id) {
        const leadDelete = await Leads.destroy({ where: { id } });
        const leadsJsonDeleteStatus = leadDelete === 1;
        return res.json({ leadsDeleteStatus: leadsJsonDeleteStatus });
      }
      return res.json({ leadsDeleteStatus: false });
    } catch (error) {
      return res.json({ createLeadStatus: false });
    }
  });
router.patch('/:id/update-status', auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status_id } = req.body;
    if (id && status_id) {
      const leadFind = JSON.parse(JSON.stringify(await Leads.findOne({ where: { id }, include: [Leads_type, Companies] })));
      if (leadFind.status_id === 2 && leadFind.company_id !== null) {
        const t = await db.sequelize.transaction();
        const company = await Companies.update({ balance: leadFind.Company.balance + leadFind.Leads_type.price }, { where: { id: leadFind.company_id } }, { transaction: t });
        const leads = await Leads.update({ status_id, company_id: null }, { where: { id } }, { transaction: t });
        await t.commit();
        const updateCompanyBalance = company[0] === 1;
        const resetLeadStatus = leads[0] === 1;
        return res.json({ updateCompanyBalance, resetLeadStatus });
      }
      return res.json({ updateCompanyBalance: false, resetLeadStatus: false });
    }
    return res.json({ updateCompanyBalance: false, resetLeadStatus: false });
  } catch (error) {
    return res.json({ updateCompanyBalance: false, resetLeadStatus: false });
  }
});
router.patch('/lead-send', auth, async (req, res, next) => {
  try {
    const {
      id, company_id,
    } = req.body;
    if (id && company_id) {
      const lead = JSON.parse(JSON.stringify(await Leads.findOne({
        where: { id },
        include: [Leads_type,
          Statuses,
          Companies],
      })));
      const companySearch = JSON.parse(JSON.stringify(await Companies.findOne({ id: company_id })));
      const balanceUpdate = companySearch.balance - lead.Leads_type.price;
      if (lead.Status.id !== 2 && lead.Company === null && balanceUpdate > 0) {
        const t = await db.sequelize.transaction();
        const leads = await Leads.update({ company_id, status_id: 2 }, { where: { id } }, { transaction: t });
        const company = await Companies.update(
          { balance: balanceUpdate },
          { where: { id: company_id } },
          { transaction: t },
        );
        await t.commit();
        const leadsUpdateStatus = leads[0] === 1;
        const companyUpdateBalance = company[0] === 1;
        return res.json({ updateLeadStatus: leadsUpdateStatus, companyUpdateBalance });
      }
      return res.json({ updateLeadStatus: false, companyUpdateBalance: false });
    }
    return res.json({ updateLeadStatus: false, companyUpdateBalance: false });
  } catch (error) {
    return res.json({ updateLeadStatus: false, companyUpdateBalance: false });
  }
});

module.exports = router;
