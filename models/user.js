"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.comment, {
        foreignKey: "userId",
      });
      user.hasMany(models.trip, {
        foreignKey: "organizerId",
        as: "organizer",
      });

      user.belongsToMany(models.trip, {
        through: "userTrips",
        foreignKey: "travelerId",
        as: "traveler",
      });
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      imageAvatar: {
        type: DataTypes.STRING,
      },
      gender: DataTypes.STRING,
      description: DataTypes.TEXT,
      dateOfBirth: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
