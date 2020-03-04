const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/superheroes", {
  useNewUrlParser: true
});

module.exports = mongoose;
