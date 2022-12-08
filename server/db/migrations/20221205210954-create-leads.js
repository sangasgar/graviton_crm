/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lead_name: {
        type: Sequelize.STRING,
      },
      lead_phone: {
        type: Sequelize.STRING,
      },
      lead_type_id: {
        references: {
          model: 'Leads_types',
          key: 'id',
        },
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER,
      },
      company_id: {
        references: {
          model: 'Companies',
          key: 'id',
        },
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER,
      },
      status_id: {
        references: {
          model: 'Statuses',
          key: 'id',
        },
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Leads');
  },
};
