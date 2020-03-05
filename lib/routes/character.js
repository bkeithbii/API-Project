const express = require("express");
const router = express.Router();
const characterController = require("../controllers/character");

router.get("/", characterController.index);
router.get("/:name", characterController.showName);

module.exports = router;
