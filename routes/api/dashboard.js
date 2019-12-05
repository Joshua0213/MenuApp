const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Profile Model
const Profile = require("../../models/Profile");
//Load User Profile
const User = require("../../models/User");
//

// @route   GET /dashboard
// @desc    Get current users profile
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

// @route   POST /dashboard
// @desc    POST current users profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileFields = {};
    if (req.body.newheader) profileFields.mainheader = req.body.newheader;
    if (req.body.newhandle) profileFields.handle = req.body.newhandle;
    profileFields.user = req.user.id;
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //update

        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => {
          console.log(profile.mainheader);
          res.json(profile.mainheader);
        });
      } else {
        //create
        profileFields.handle = req.user.id;
        new Profile(profileFields)
          .save()
          .then(profile => res.json(profile.handle));
      }
    });
  }
);

module.exports = router;
