"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          name: "Pietjeeee",
          comment: "Thanks for the good travel!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Daenerys",
          comment: "This is a great trip.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ariana",
          comment: "When are we going again?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barry",
          comment: "Are we starting a new trip, this one was great!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
