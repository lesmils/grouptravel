"use strict";
const { Model } = require("sequelize");
const user = require("./user");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.user, { foreignKey: "userId" });
      comment.belongsTo(models.trip, { foreignKey: "tripId" });
    }
  }
  comment.init(
    {
      comment: DataTypes.TEXT,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
