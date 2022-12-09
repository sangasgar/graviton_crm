/* eslint-disable max-len */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const { Users } = require('../db/models');

const router = express.Router();

/* GET users listing. */

router.route('/check')
  .post(auth, async (req, res) => {
    res.json(req.user);
  });
router.route('/')
  .post(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const userReg = await Users.findOne({ where: { email } });
        if (!userReg) {
          return res.json({ userFind: false, userAuth: false });
        }
        const userJson = JSON.parse(JSON.stringify(userReg));
        if (await bcrypt.compare(password, userJson.password)) {
          const token = jwt.sign({
            id: userJson.id, name: userJson.name, email: userJson.email,
          }, process.env.TOKEN_SECRET, { expiresIn: '6h' });
          const user = {
            id: userJson.id, name: userJson.name, email: userJson.email, token,
          };
          return res.json(user);
        }
        return res.json({ userFind: true, userAuth: false });
      }
    } catch (error) {
      return res.json({ userFind: false, userAuth: false });
    }
    return res.json({ userFind: false, userAuth: false });
  })
  .put(auth, async (req, res, next) => {
    try {
      const {
        id, name, email, password,
      } = req.body;
      if ((id && name) || (id && name) || (id && email) || (id && password)) {
        if (name) {
          await Users.update({ name }, { where: { id } });
        }
        if (email) {
          await Users.update({ email }, { where: { id } });
        }
        if (password) {
          await Users.update({ password: await bcrypt.hash(password, Number(process.env.SALTROUNDS)) }, { where: { id } });
        }
        const userFind = await Users.findOne({ where: { id } });
        const userJson = JSON.parse(JSON.stringify(userFind));
        const token = jwt.sign({
          id: userJson.id, name: userJson.name, email: userJson.email,
        }, process.env.TOKEN_SECRET, { expiresIn: '6h' });
        const user = {
          id: userJson.id, name: userJson.name, email: userJson.email, token,
        };
        return res.json(user);
      }
      return res.json({ userFind: false, userUpdate: false });
    } catch (error) {
      return res.json({ userFind: false, userUpdate: false });
    }
  });

module.exports = router;
