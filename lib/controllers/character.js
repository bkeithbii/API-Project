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
  },
  showGender: (req, res) => {
    Character.find({ Gender: req.params.gender }).then(character => {
      res.json(character);
    });
  },
  showRace: (req, res) => {
    Character.find({ Race: req.params.race }).then(character => {
      res.json(character);
    });
  },
  showPublisher: (req, res) => {
    Character.find({ Publisher: req.params.publisher }).then(character => {
      res.json(character);
    });
  }
};
