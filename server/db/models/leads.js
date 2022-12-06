const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class leads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  leads.init({
    lead_type_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    lead_name: DataTypes.STRING,
    lead_phone: DataTypes.STRING,
    status_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'leads',
  });
  return leads;
};
