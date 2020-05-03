const express = require("express");
const app = express();
const parser = require("body-parser");
const index = require("./routes/index");
const cors = require("cors");
const Character = require("./models/Character");

app.use(cors());
app.use(parser.json());
app.use("/", index);

app.get("/", function (req, res) {
  res.json({
    Directory: "Choose an option below",
    Characters: "https://heroes-and-villains-bb.herokuapp.com/character",
    Powers: "https://heroes-and-villains-bb.herokuapp.com/power",
  });
});

app.get("/character/status/:alignment", function (req, res) {
  Character.find({ Alignment: req.params.alignment }).then((character) => {
    res.json(character);
  });
});

app.get("/character/gender/:gender", function (req, res) {
  Character.find({ Gender: req.params.gender }).then((character) => {
    res.json(character);
  });
});

app.get("/character/race/:race", function (req, res) {
  Character.find({ Race: req.params.race }).then((character) => {
    res.json(character);
  });
});

app.get("/character/publisher/:publisher", function (req, res) {
  Character.find({ Publisher: req.params.publisher }).then((character) => {
    res.json(character);
  });
});

// Old links to backend
// Characters: "http://localhost:8080/character",
//     Powers: "http://localhost:8080/power",

// Links to use above prior to submitting project

// Characters: "https://heroes-and-villains-bb.herokuapp.com/character",
// Powers: "https://heroes-and-villains-bb.herokuapp.com/power"

// Old server
// app.listen(4000, () => console.log("Serving running, catch up!"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
