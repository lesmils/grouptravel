"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          phoneNumber: "0600000000",
          imageAvatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSid1oW_E1oqFO0YfCDOnqFPP_lEwagLmIhr4o9euKIO6-Ll7ESqW_1Dl3OMW1iwfJqX8s&usqp=CAU",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          gender: "woman",
          description: "Hello, this is me.",
          dateOfBirth: new Date(1955, 1, 27),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "a@a.com",
          phoneNumber: "0611111000",
          imageAvatar:
            "https://upload.wikimedia.org/wikipedia/commons/4/4e/MyAvatar_%2841%29.png",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          gender: "men",
          description: "Byenpm, this is me.",
          dateOfBirth: new Date(1983, 5, 20),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
