const connection = require("../config/connection");
const seedUser = require('./user-data');
const seedThoughts = require('./thoughts-data');
const seedReactions = require('./reactions-data');

 connection.once('open', async () => {

  await seedUser();

  await seedThoughts();

  await seedReactions();

  process.exit(0);
});