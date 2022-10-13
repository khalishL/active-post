"use strict";
const { Model, QueryInterface } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //  
    static associate(models) {
      // define association here
      Tag.belongsTo(models.Post, { foreignKey: "PostId" });
    }
  }
  Tag.init(
    {
      name: DataTypes.STRING,
      PostId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
