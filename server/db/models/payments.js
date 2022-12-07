const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Companies }) {
      this.belongsTo(Companies, { foreignKey: 'company_id' }, { onDelete: 'cascade' });
      // define association here
    }
  }
  payments.init({
    price: DataTypes.FLOAT,
    company_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return payments;
};
