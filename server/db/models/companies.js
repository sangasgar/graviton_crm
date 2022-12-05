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
    static associate(models) {
      // define association here
    }
  }
  companies.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    comment: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'companies',
  });
  return companies;
};
