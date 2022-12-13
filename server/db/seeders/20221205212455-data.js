const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Garegin',
      email: 'sangas@yandex.ru',
      password: await bcrypt.hash('123', Number(process.env.SALTROUNDS)),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Basan',
      email: 'basan@yandex.ru',
      password: await bcrypt.hash('123', Number(process.env.SALTROUNDS)),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Yulia',
      email: 'yilia@yandex.ru',
      password: await bcrypt.hash('123', Number(process.env.SALTROUNDS)),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Statuses', [
      {
        name: 'Активный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Передан',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'В работе',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Возврат',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Не актуально',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('Leads_types', [{
      name: 'Стандарт',
      price: 150.00,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Стандарт+',
      price: 200.00,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Премиум',
      price: 300.00,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
    await queryInterface.bulkInsert('Companies', [{
      name: 'Компания 1',
      phone: '+79261119990',
      email: 'sangas@yandex.ru',
      balance: 100000.00,
      comment: 'Комментарий компания 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Компания 2',
      phone: '+79261119990',
      email: 'sangas1@yandex.ru',
      balance: 150000.00,
      comment: 'Комментарий компания 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
    await queryInterface.bulkInsert('Payments', [{
      price: 100000.00,
      company_id: 1,
      comment: 'Пополнение компании 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      price: 150000.00,
      company_id: 2,
      comment: 'Пополнение компании 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
    await queryInterface.bulkInsert('Leads', [{
      lead_name: 'Иван',
      lead_phone: '79251111111',
      lead_type_id: 1,
      company_id: 1,
      status_id: 1,
      comment: 'Недвижимость Павел 8999900000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      lead_name: 'Виктор',
      lead_phone: '79251111111',
      lead_type_id: 2,
      company_id: 2,
      status_id: 2,
      comment: 'Недвижимость Иван 8999900000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
