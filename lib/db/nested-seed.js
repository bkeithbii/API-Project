const Character = require("../models/Character");
const Power = require("../models/Power");

Character.find({}).then(characters => {
  characters.forEach(character => {
    console.log(character);
    Power.findOne({ Name: character.Name })
      .then(powers => {
        character.Powers = powers;
        character.save();
      })
      .catch(err => {
        console.log(err);
      });
  });
});
