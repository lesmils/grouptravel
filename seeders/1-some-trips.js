"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "trips",
      [
        {
          title: "Trip 1",
          description: "Hello, this is me.",
          image: "https://eskipaper.com/images/country-roads-3.jpg",
          country: "Netherlands",
          maximumTravelers: 5,
          startingDate: new Date(1955, 1, 27),
          endDate: new Date(1965, 1, 27),
          createdAt: new Date(),
          updatedAt: new Date(),
          organizerId: 1,
        },
        {
          title: "Trip 2",
          description: "This is a nice trip.",
          image:
            "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnRyeXxlbnwwfHwwfHw%3D&w=1000&q=80",
          country: "Germany",
          maximumTravelers: 15,
          startingDate: new Date(2022, 1, 27),
          endDate: new Date(2022, 1, 22),
          createdAt: new Date(),
          updatedAt: new Date(),
          organizerId: 2,
        },
        {
          title: "Trip 3",
          description: "Go on the third trip.",
          image:
            "https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeXxlbnwwfHwwfHw%3D&w=1000&q=80",
          country: "Germany",
          maximumTravelers: 15,
          startingDate: new Date(2021, 1, 27),
          endDate: new Date(2022, 2, 22),
          createdAt: new Date(),
          updatedAt: new Date(),
          organizerId: 2,
        },
        {
          title: "Trip 4",
          description: "Here the party is at.",
          image:
            "https://c0.wallpaperflare.com/preview/805/1011/649/barn-red-winter-snow.jpg",
          country: "Germany",
          maximumTravelers: 15,
          startingDate: new Date(2021, 5, 27),
          endDate: new Date(2021, 8, 22),
          createdAt: new Date(),
          updatedAt: new Date(),
          organizerId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
