const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// @route   GET /menus/test
// @desc    Tests menus route
// @access  Public
router.get("/test", (req, res) => {
  //   User.findOneAndUpdate(
  //     { name: "test" },
  //     { profile: { mainheader: "My Menu" } },
  //     { upsert: true }
  //   )
  //     .then(user => {
  //       res.json(user.profile);
  //     })
  //     .catch(err => console.log(err));
});

module.exports = router;
