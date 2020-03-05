const express = require("express");
const app = express();
const parser = require("body-parser");
const index = require("./routes/index");

app.use(parser.json());
app.use("/", index);

app.get("/", function(req, res) {
  res.json({
    Directory: "Choose an option below",

    Characters: "http://localhost:4000/character",
    Powers: "http://localhost:4000/power"
  });
});

// app.listen(4000, () => console.log("Serving running, catch up!"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
