const express = require("express");
const router = express.Router();
const powerController = require("../controllers/power");

router.get("/", powerController.index);
