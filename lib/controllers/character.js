const Character = require("../models/Character");

module.exports = {
  index: (req, res) => {
    Character.find({}).then(character => {
      res.json(character);
    });
  },
  showName: (req, res) => {
    Character.find({ name: req.params.name }).then(character => {
      res.json(character);
    });
  }
};
