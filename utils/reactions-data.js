const { Reaction } = require("../models");

const reactions = [
  {
    reactionId: 1,
    reactionBody: "Excuse me?!?!",
    username: "woody",
    CreatedAt: "February 26",
  },
  {
    reactionId: 2,
    reactionBody: "I think you need to re-evaluate your priorities.",
    username: "BuZzLiGhTyEaR",
    CreatedAt: "February 25",
  },
  {
    reactionId: 3,
    reactionBody: "Yes... finally someone said it!",
    username: "Mr.Potato-Head",
    CreatedAt: "February 26",
  },
  {
    reactionId: 4,
    reactionBody:
      "I think you need to ddelete your account and start all over. You are going to create issues.",
    username: "Mr.Potato-Head",
    CreatedAt: "February 27",
  },
  {
    reactionId: 5,
    reactionBody:
      "Hmm... I do not have anything nice to say, so I will not say anything at all.",
    username: "woody",
    CreatedAt: "February 25",
  },
];

const seedReactions = () => Reaction.bulkCreate(reactions);

module.exports = seedReactions;
