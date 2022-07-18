const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts, getRandomArrItem } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
//   const usersArr = [];

//   // Get some random thoughts objects using a helper function that we imported from ./data
//   const thoughtsSeed = getRandomThoughts(10);

  
//   // Add courses to the collection and await the results
//   await Thought.collection.insertMany(thoughtsSeed);

//   // Loop 10 times -- add students to the students array
//   for (let i = 0; i < 10; i++) {
//       const username = `${getRandomName()}_${Math.floor(Math.random() * 100)}`;
//       const email = `${username}@mail.com`;
    
//     usersArr.push({
//       username,
//       email,
//       thoughts: [getRandomArrItem(thoughtsSeed)._id],


//     });
//   }

//   console.log(thoughtsSeed);

//   // Add users to the collection and await the results
//   await User.collection.insertMany(usersArr);


//   // Log out the seed data to indicate what should appear in the database
//   console.table(usersArr);
//   console.table(thoughtsSeed);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
});
