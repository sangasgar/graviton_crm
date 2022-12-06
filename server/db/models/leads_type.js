const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class leads_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  leads_type.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'leads_type',
  });
  return leads_type;
};
