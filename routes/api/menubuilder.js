const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Profile = require("../../models/Profile");

// @route   GET /menubuilder
// @desc    Get current users menubuilder
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (profile) {
          res.json(profile.mainheader);
        } else {
          const profileFields = { mainheader: "My menu" };

          const profileDoc = new Profile(profileFields);
          profileDoc.save().then(profile => res.json(profile.mainheader));
        }
      })
      .catch(err => {
        res.json(err);
      });
  }
);

module.exports = router;
