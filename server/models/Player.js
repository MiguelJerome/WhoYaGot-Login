const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerSchema = new Schema({
  TeamID: {
    type: Number,
    min: 0,
    default: 0
  },
  PlayerID: {
    type: Number,
    min: 0,
    default: 0
  },
  Name: {
    type: String,
    required: true,
    trim: true
  },
  Team: {
    type: String,
    required: true,
    trim: true
  },
  Position: {
    type: String
  },
  FantasyPoints: {
    type: Number,
    required: true,
  
  },
  
  
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
