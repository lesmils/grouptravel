const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Trip = require("../models/").trip;
const Comment = require("../models/").comment;

const router = new Router();


router.post("/", authMiddleware, async (req, res) => {
  const { name, comment, tripId } = req.body;

  const user = req.user;

  const newComment = await Comment.create({
    name: name,
    comment: comment,
    tripId: tripId,
    userId: user.id,
  })
  res.status(200).send(newComment);
});

module.exports = router;
