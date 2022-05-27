const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    User.find({})
      .populate("wine")
      .then(users => {
        res.json(users);
      });
  }
};