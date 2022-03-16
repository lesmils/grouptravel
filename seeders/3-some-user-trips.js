"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userTrips",
      [
        {
          tripId: 1,
          travelerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 2,
          travelerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 3,
          travelerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 4,
          travelerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 2,
          travelerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userTrips", null, {});
  },
};
