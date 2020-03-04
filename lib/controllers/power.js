const Power = require("../models/Power");

module.exports = {
  index: (req, res) => {
    Power.find({}).then(power => {
      res.json(power);
    });
  }
};
