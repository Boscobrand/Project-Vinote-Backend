const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/api/trail/", require("./trailRoute.js"));
router.use("/api/review/", require("./reviewRoute.js"));


module.exports = router;
