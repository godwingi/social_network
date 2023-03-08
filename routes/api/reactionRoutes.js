const router = require("express").Router();
const {
  createReaction,
  deleteReaction,
} = require("../../controllers/reactionController");

router.route("/:thoughtId").post(createReaction);

router
.route("/:thoughtId")
.delete(deleteReaction);

module.exports = router;