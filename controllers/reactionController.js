const { Reaction } = require("../models");
const { Thought } = require("../models");
const reactionSchema = require("../models/Reaction");

module.exports = {
  createReaction(req, res) {
    console.log(req.params);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res
              .status(404)
              .json({
                message: "Reaction created, but no thought with this ID",
              })
          : res.json({ message: "Reaction created" })
      )
      .catch((err) => {
        console.error(err);
      });
  },

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: "No thought found with that ID" })
          : Thought.deleteMany({
              _id: { $in: reaction  },
            })
      )
      .then(() => res.json({ message: "Reaction deleted!" }))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
