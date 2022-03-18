const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const UserTrips = require("../models/").userTrips;
const User = require("../models").user;

const router = new Router();

router.post("/:id", authMiddleware, async (req, res) => {
  const userTravelerId = req.user.id;
  const tripId = req.params.id

  const userAlreadyTraveler = await UserTrips.findAll({
    where: { travelerId: userTravelerId, tripId: tripId }
  });
  if (userAlreadyTraveler.lenght > 0) {
    res.status(400).send({ message: "User already goes on this trip!" })


  } else {
    const newTraveler = await UserTrips.create({
      tripId: tripId,
      travelerId: userTravelerId,
    });
    res.send(newTraveler);
  }
  console.log("This is the tripId", userAlreadyTraveler)
});

module.exports = router;
