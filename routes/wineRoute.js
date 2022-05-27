const express = require("express");
const router = express.Router();
const winesController = require("../controllers/wines");

router.get("/", winesController.index);

module.exports = router;
