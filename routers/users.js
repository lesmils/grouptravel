const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models/").user;
const Trip = require("../models/").trip;
const Comment = require("../models/").comment;
const authMiddleware = require("../auth/middleware");

const router = new Router();

//GET ONE TRIP
router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  if (isNaN(parseInt(userId))) {
    return res.status(400).send({ message: "User id is not a number" });
  }

  const oneUser = await User.findByPk(userId, {
    attributes: { exclude: ["password", "email"] },
    include: [
      {
        model: Trip,
        as: "traveler",
      },
      {
        model: Trip,
        as: "organizer",
      },
      {
        model: Comment,
      },
    ],
  });
  res.status(200).send(oneUser);
});

module.exports = router;
