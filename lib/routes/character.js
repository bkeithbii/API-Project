const express = require("express");
const router = express.Router();
const characterController = require("../controllers/character");

router.get("/", characterController.index);
router.get("/:name", characterController.showName);
router.get("/status/:alignment", characterController.showAlignment);
router.get("/gender/:gender", characterController.showGender);
router.get("/race/:race", characterController.showRace);
router.get("/publisher/:publisher", characterController.showPublisher);

module.exports = router;
