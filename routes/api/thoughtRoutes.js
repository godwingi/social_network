const router = require("express").Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts)
router.route("/:userId").post(createThought);
router.route("/:thoughtId").get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

module.exports = router;
