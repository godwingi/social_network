const { Thoughts } = require("../models");

const thoughts = [
  {
    thoughtText: "Andy ought to clean up after himself more often.",
    createdAt: "February 24",
    username: "BuZzLiGhTyEaR",
  },
  {
    thoughtText: "I find BuzzLigthYears speech very annoying.",
    createdAt: "February 23",
    username: "Mr.Potato-Head",
  },
  {
    thoughtText: "Let us be real: the Weiner Dog is MVT - Most Valuable Toy",
    createdAt: "February 23",
    username: "woody",
  },
  {
    thoughtText:
      "Can I just say that we really need to stop getting into mayhem?",
    createdAt: "February 24",
    username: "woody",
  },
  {
    thoughtText: "I think I need a driver license for a car... Thoughts?",
    createdAt: "February 25",
    username: "BuZzLiGhTyEaR",
  },
];

const seedThoughts = () => Thought.bulkCreate(thoughts);

module.exports = seedThoughts;
