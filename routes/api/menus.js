const express = require("express");
const router = express.Router();
const Profile = require("../../models/Profile");
const uploads = require("./uploads");

// @route   GET /menus/test
// @desc    Tests menus route
// @access  Public
router.get("/:handle", (req, res) => {
  console.log("test111");
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .then(profile => {
      if (!profile) {
        errors.noprofile = `Profile wasn't found`;
        res.status(404).json(errors);
      } else {
        console.log(uploads);
        res.json(profile.mainheader);
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
