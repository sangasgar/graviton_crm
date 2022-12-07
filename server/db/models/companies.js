const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Payments, Leads }) {
      this.hasMany(Payments, { foreignKey: 'company_id' });
      this.hasMany(Leads, { foreignKey: 'company_id' });
      // define association here
    }
  }
  companies.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    comment: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return companies;
};
