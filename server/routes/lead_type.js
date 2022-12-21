/* eslint-disable max-len */
const express = require('express');
const { Leads } = require('../db/models');
const { Leads_type } = require('../db/models');
const { Companies } = require('../db/models');

const router = express.Router();
const auth = require('../middleware/auth');
/* GET home page. */
router.route('/')
  .get(auth, async (req, res, next) => {
    try {
      const lead_type = await Leads_type.findAll({
        order: [
          ['updatedAt', 'DESC'],
        ],
      });
      const leadTypeJson = JSON.parse(JSON.stringify(lead_type));
      return res.json(leadTypeJson);
    } catch (error) {
      return res.json({ error: 'Ошибка соеднинения' });
    }
  })
  .post(auth, async (req, res, next) => {
    try {
      const {
        name, price,
      } = req.body;
      if (name && price) {
        const lead_type = await Leads_type.create({
          name,
          price,
        });
        const leadTypeJsonCreateStatus = JSON.parse(JSON.stringify(lead_type)).name === name;
        return res.json({ createLeadTypeStatus: leadTypeJsonCreateStatus });
      }
      return res.json({ createLeadTypeStatus: false });
    } catch (error) {
      return res.json({ createLeadTypeStatus: false });
    }
  })
  .delete(auth, async (req, res, next) => {
    try {
      const {
        id,
      } = req.body;
      const leadFind = JSON.parse(JSON.stringify(await Leads_type.findOne({ where: { id }, include: [Leads] })));
      if (id && leadFind.Leads.length <= 0) {
        const leadTypeDelete = await Leads_type.destroy({ where: { id } });
        const leadTypeDeleteStatus = leadTypeDelete === 1;
        return res.json({ leadTypeDeleteStatus });
      }
      return res.json({ leadTypeDeleteStatus: false });
    } catch (error) {
      return res.json({ leadTypeDeleteStatus: false });
    }
  });
module.exports = router;
