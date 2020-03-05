const Character = require("../models/Character");

module.exports = {
  index: (req, res) => {
    Character.find({}).then(character => {
      res.json(character);
    });
  },
  showName: (req, res) => {
    Character.find({ Name: req.params.name }).then(character => {
      res.json(character);
    });
  },
  showAlignment: (req, res) => {
    Character.find({ Alignment: req.params.alignment }).then(character => {
      res.json(character);
    });
  }
};
