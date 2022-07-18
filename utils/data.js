const names = [
    'John',
    'Patrick',
    'Alex',
    'George',
    'Marie',
    'Pablo',
    'Edwin',
    'Emm',
    'Eduardo',
    'Charlie',
    'Brad',
    'Kate',
    'Andy',
    'Andrea',
    'Lisa',
    'Hailey',
    'Pamela',
    'Adan',
    'Eden',
    'Victoria',
    'Mario',
    'Reus',
    'Robert',
    'Rafael',
    'Roger',
    'Lemus',
    'Kevin',
    'Santi',
    'Francisco',
    'Juan'
  ];
  
  const thoughtsArr = [
    'Hello',
    'you look amazing',
    'I would like to learn piano',
    'Let\'s play soccer',
    'I love your shirt',
    'The flights scare me',
    'See one action movie',
    'Like play sport',
    'The social medias are great',
    'Everyone deserves to be happy',
    'I would like to start programming',
    'Javascript is a programming language',
    'MongoDB has many functions',
    'Firefox is a good browser',
    'I have lost weight with Running app',
    'If you want to learn how to cook, you need to download Cooking app',
    'Let\'s play Poker',
    'The next week, I am starting a new job',
  ];

  const reactionsArr = [
    'Happy',
    'Recommended',
    'Angry',
    'Like',
    'Funny',
    'Hungry',
    'Genius',
    'Love it'
  ]; 
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random name
  const getRandomName = () => `${getRandomArrItem(names)}`;

  const getRandomReactions = () => {
      const results = [];
      let random = Math.floor(Math.random() * 8);

      for (let i = 0; i < random; i++) {
        results.push({
          reactionBody: getRandomArrItem(reactionsArr),
          username: `${getRandomName()}_${Math.floor(Math.random() * 100)}`
        });
      }
      return results;
  }
  
  // Function to generate random thoughts.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtsArr),
        username: `${getRandomName()}_${Math.floor(Math.random() * 100)}`,
        reactions: getRandomReactions()
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts, getRandomArrItem };
  