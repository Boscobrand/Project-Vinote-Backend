const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/api/user/", require("./userRoute.js"));
router.use("/api/wine/", require("./wineRoute.js"));


module.exports = router;
