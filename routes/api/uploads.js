const express = require("express");
const router = express.Router();
const Profile = require("../../models/Profile");
const uploads = require("./uploads");

// @route   GET /menus/test
// @desc    Tests menus route
// @access  Public
router.get("/:address", (req, res) => {
  console.log(req.params.address);
  const errors = {};
  let address = req.params.address;
  console.log(uploads.address);
  Profile.findOne({})
    .then(profile => {
      if (!profile) {
        errors.noprofile = `Profile wasn't found`;
        res.status(404).json(errors);
      } else {
        console.log("test2222");
        res.json(profile.mainheader);
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
