const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models/").user;
const Trip = require("../models/").trip;
const Comment = require("../models/").comment;

const router = new Router();

//GET ALL TRIPS
router.get("/", async (req, res) => {
  const allTrips = await Trip.findAll({
    include: [
      { model: User, as: "traveler" },
      { model: User, as: "organizer" },
    ],
    // include: {
    //   model: User,
    //   as: "traveler",
    //   // attributes: ["name", "id"],
    // },
    // include: [
    //   {
    //     model: User,
    //     as: "organizer",
    //     // attributes: ["name", "id"],
    //   },
    // ],
    // order: [["time", "ASC"]],
  });
  res.status(200).send(allTrips);
});

//GET ONE TRIP
router.get("/:id", async (req, res) => {
  const tripId = req.params.id;

  if (isNaN(parseInt(tripId))) {
    return res.status(400).send({ message: "Trip id is not a number" });
  }

  const oneTrip = await Trip.findByPk(tripId, {
    include: [
      {
        model: User,
        as: "traveler",
        attributes: ["name", "id"],
      },
      {
        model: User,
        as: "organizer",
        attributes: ["name", "id"],
      },
      {
        model: Comment,
      },
    ],
  });
  res.status(200).send(oneTrip);
});

module.exports = router;
