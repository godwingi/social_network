const { Reaction } = require("../models");

module.exports = {
  createReaction(req, res) {
   Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        )
      .then((reaction) =>
        !reaction
          ? res
              .status(404)
              .json({ message: "Reaction created, but no thought with this ID" })
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
          ? res
          .status(404)
          .json({ message: "No thought found with that ID" })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err))
      console.log(err);
  },
};
