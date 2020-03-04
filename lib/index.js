const express = require("express");
const app = express();
const parser = require("body-parser");
const index = require("./routes/index");

app.use(parser.json());
app.use("/", index);

app.listen(4000, () => console.log("Serving running, catch up!"));
