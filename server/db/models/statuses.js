const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class statuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Leads }) {
      this.hasMany(Leads, { foreignKey: 'status_id' });
      // define association here
    }
  }
  statuses.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Statuses',
  });
  return statuses;
};
