const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./db/models');
require('dotenv').config();

const PORT = process.env.PORT || 3011;
const indexRouter = require('./routes/index');
const leadsRouter = require('./routes/leads');
const companyRouter = require('./routes/companies');
const usersRouter = require('./routes/users');
const paymentRouter = require('./routes/payment');
const leadTypeRouter = require('./routes/lead_type');

const testBD = async () => {
  try {
    await db.sequelize.authenticate;
    console.log('Подключение к базе успешно');
  } catch (error) {
    console.log('Не удалось подключиться к базе');
  }
};
const app = express();
testBD();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/leads', leadsRouter);
app.use('/companies', companyRouter);
app.use('/payments', paymentRouter);
app.use('/lead-type', leadTypeRouter);
app.listen(PORT, () => {
  console.log('Сервер запущен на порту ', PORT);
});
module.exports = app;
