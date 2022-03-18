"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userTrips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userTrips.belongsTo(models.trip, { foreignKey: "tripId" });
      userTrips.belongsTo(models.user, { foreignKey: "travelerId" });
    }
  }
  userTrips.init(
    {
      travelerId: DataTypes.INTEGER,
      tripId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userTrips",
    }
  );
  return userTrips;
};

//test
