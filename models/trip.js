"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trip.belongsTo(models.user, {
        foreignKey: "organizerId",
        as: "organizer",
      });
      trip.belongsToMany(models.user, {
        foreignKey: "tripId",
        through: "userTrips",
        as: "traveler"
      });
      trip.hasMany(models.comment, { foreignKey: "tripId" });
    }
  }
  trip.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      country: DataTypes.STRING,
      maximumTravelers: DataTypes.INTEGER,
      startingDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "trip",
    }
  );
  return trip;
};
