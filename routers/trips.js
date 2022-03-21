const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models/").user;
const Trip = require("../models/").trip;
const Comment = require("../models/").comment;
const authMiddleware = require("../auth/middleware");

const router = new Router();

//GET ALL TRIPS
router.get("/", async (req, res) => {
  const allTrips = await Trip.findAll({
    include: [
      { model: User, as: "traveler", attributes: ["name", "id"] },
      { model: User, as: "organizer", attributes: ["name", "id"] },
    ],
    order: [["createdAt", "DESC"]],
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
        include: { model: User, attributes: ["name", "id", "imageAvatar"] },
      },
    ],
  });
  res.status(200).send(oneTrip);
});

//POST A TRIP
router.post("/", authMiddleware, async (req, res) => {
  const {
    title,
    description,
    image,
    country,
    maximumTravelers,
    endDate,
    startingDate,
  } = req.body;

  const user = req.user;

  const newTrip = await Trip.create({
    title: title,
    description: description,
    image: image,
    country: country,
    maximumTravelers: maximumTravelers,
    endDate: endDate,
    startingDate: startingDate,
    organizerId: user.id,
  });
  res.status(200).send(newTrip);
});

module.exports = router;
