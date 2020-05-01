const express = require("express");
const router = express.Router();
const characterController = require("../controllers/character");

router.get("/", characterController.index);
router.get("/:name", characterController.showName);
router.get("/character/status/:alignment", characterController.showAlignment);
router.get("/character/gender/:gender", characterController.showGender);
router.get("/character/race/:race", characterController.showRace);
router.get(
  "/character/publisher/:publisher",
  characterController.showPublisher
);
router.post("/", characterController.create);
// router.get("/powers/:powers", characterController.showPowers);

module.exports = router;
