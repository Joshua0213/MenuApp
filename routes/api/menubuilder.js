const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: fileFilter
});

const Profile = require("../../models/Profile");
const User = require("../../models/User");

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
        res.json(profile);
      })
      .catch(err => {
        res.json(err);
      });
  }
);

// @route   POST /menubuilder
// @desc    POST current users profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  (req, res) => {
    console.log(req.user.id);
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //update
        //const filePath = req.protocol + "://" + host + "/" + req.file.path;
        //console.log(filePath);
        let imageArray = profile.images;
        let imageObject = {
          name: req.file.originalname,
          path: req.file.path
        };
        console.log(req.file.path);
        imageArray.push(imageObject);
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: { images: imageArray } },
          { new: true }
        ).then(profile => {
          res.json(imageArray);
        });
      } else {
        res.json(req.user.id);
      }
    });
  }
);

module.exports = router;
