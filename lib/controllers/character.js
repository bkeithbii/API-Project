const Character = require("../models/Character");

module.exports = {
  index: (req, res) => {
    Character.find({}).then(character => {
      res.json(character);
    });
  }
};
