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

router.patch("/:id", authMiddleware, async (req, res, next) => {
  try {
    const userTravelerId = req.user.id;
    const tripId = req.params.id;
    const userAlreadyParticipant = await UserTrips.findAll({
      where: { travelerId: userTravelerId, tripId: tripId },
    });
    if (userAlreadyParticipant.length > 0) {
      const travelerToBeDeleted = await UserTrips.findOne({
        where: { travelerId: userTravelerId, tripId: tripId },
      });
      const deletedTraveler = await travelerToBeDeleted.destroy();
      res.send(deletedTraveler);
    } else {
      const newTraveler = await UserTrips.create({
        tripId: tripId,
        travelerId: userTravelerId,
      });
      const userThatIsTraveler = await User.findByPk(userTravelerId);
      res.send(userThatIsTraveler);
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const userParticipantId = req.user.id;
    const tripId = req.params.id;
    const participantToBeDeleted = await Participant.findOne({
      where: { travelerId: userParticipantId, tripId: tripId },
    });
    const deletedParticipant = await participantToBeDeleted.destroy();
    res.send(deletedParticipant);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = router;
