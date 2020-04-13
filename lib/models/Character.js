const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Character = new Schema({
  Name: String,
  Alignment: String,
  Gender: String,
  Race: String,
  Publisher: String,
  Powers: [{}]
});

module.exports = mongoose.model("Character", Character);
