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
            "https://upload.wikimedia.org/wikipedia/commons/4/4e/MyAvatar_%2841%29.png",
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
            "https://www.educaccionperu.org/wp-content/uploads/2020/04/myAvatar.png",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          gender: "men",
          description: "Byenpm, this is me.",
          dateOfBirth: new Date(1983, 5, 20),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testguy",
          email: "1",
          phoneNumber: "0600000000",
          imageAvatar:
            "https://i0.wp.com/roboticatic.com/wp-content/uploads/2018/01/myAvatar-2.png",
          password: bcrypt.hashSync("1", SALT_ROUNDS),
          gender: "woman",
          description: "Hello, this is me.",
          dateOfBirth: new Date(1955, 1, 27),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "testuser",
          email: "aaaa@test.com",
          phoneNumber: "0600000000",
          imageAvatar:
            "https://www.frontiersin.org/files/Articles/404841/frym-06-00051-HTML-r1/image_m/re-eliana.jpg",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          gender: "woman",
          description: "Hello, this is me.",
          dateOfBirth: new Date(1955, 1, 27),
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
``