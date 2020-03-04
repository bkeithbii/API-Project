const express = require("express");
const router = express.Router();
router.use("/character", require("./character"));
router.use("/power", require("./power"));

module.exports = router;
