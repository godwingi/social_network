const { User } = require("../models");

const users = [
  {
    username: "Mr.Potato-Head",
    email: "thebesttoy@gmail.com",
  },
  {
    username: "woody",
    email: "thecowboyofalltimes@gmail.com",
  },
  {
    username: "BuZzLiGhTyEaR",
    email: "zipzapzoom@gmail.com",
  },
];

// const thoughts = [
//   "Andy ought to clean up after himself more often.",
//   "I find BuzzLigthYears speech very annoyging.",
//   "Let us be real: the Weiner Dog is MVT - Most Valuable Toy",
//   "Can I just say that we really need to stop getting into mayhem?",
//   "I think I need a driver license for a car... Thoughts?",
// ];

// const reactions = [
//   "Excuse me?!?!",
//   "I think you need to re-evaluate your priorities.",
//   "Yes... finally someone said it!",
//   "I think you need to delete your account and start all over. You are going to create issues.",
//   "Hmm... I do not have anything nice to say, so I will not say anything at all.",
// ];

const seedUser = () => User.bulkCreate(users);

module.exports = seedUser;
