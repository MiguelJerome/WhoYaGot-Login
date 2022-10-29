
const playerSeeds = require('./player.json');
const db = require('../config/connection.js');
const { User, Player } = require('../models');

db.once('open', async () => {

  await Player.create(playerSeeds);

  /*
  await Player.create({
    name: 'Patrice Bergeron',
  });
  */
/*
  await Player.deleteMany();


  const players = await Player.insertMany([
    {
      "TeamID": 1,
      "PlayerID": 30000065,
      "Name": "Patrice Bergeron",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 35.5
    },{
      "TeamID": 1,
      "PlayerID": 30000195,
      "Name": "Craig Smith",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 5.6
    },{
      "TeamID": 1,
      "PlayerID": 30000218,
      "Name": "Jakub Zboril",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 4.2
    },{
      "TeamID": 1,
      "PlayerID": 30000525,
      "Name": "Mike Reilly",
      "Team": "BOS",
      "Position": "D",
      "FantasyPoints": 10.4
    },{
      "TeamID": 1,
      "PlayerID": 30000605,
      "Name": "David Krejci",
      "Team": "BOS",
      "Position": "C",
      "FantasyPoints": 20.5
    },{
      "TeamID": 1,
      "PlayerID": 30000607,
      "Name": "David Pastrnak",
      "Team": "BOS",
      "Position": "RW",
      "FantasyPoints": 45.1
    },{
      "TeamID": 1,
      "PlayerID": 30000691,
      "Name": "Nick Foligno",
      "Team": "BOS",
      "Position": "LW",
      "FantasyPoints": 14.2
    }]
  );
*/
  console.log('players seeded');

  await User.create({
    username: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
