const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../config/keys");
const passport = require("passport");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Bring in User model

const User = require("../../models/User");
const Profile = require("../../models/Profile");
// @route   GET /users/test
// @desc    Tests users route
// @access  Public
router.get("/", (req, res) => res.json({ msg: "User is working" }));
//
//
//
//
//
//
//
//
// @route   Post /users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  // Check Validation
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const emailRegular = req.body.email;
  const emailLower = emailRegular.toLowerCase();
  User.findOne({ email: emailLower }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: emailLower,
        password: req.body.password,
        profile: req.body.profile
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(
              user => {
                const payload = {
                  id: user.id,
                  name: user.name
                };

                //////////

                /////////

                // Sign Token
                jwt.sign(
                  payload,
                  secret.secret,
                  { expiresIn: 86400 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    });
                  }
                );
              }
              /////////////
            )
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST /users/login
// @desc    Login user then return JWT Token
// @access  Public
router.post("/login", (req, res) => {
  // Check Validation
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const emailRegular = req.body.email;
  const emailLower = emailRegular.toLowerCase();
  const password = req.body.password;

  //Find user by email
  User.findOne({ email: emailLower }).then(user => {
    //Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched

        const payload = { id: user.id, name: user.name };

        // Sign Token
        jwt.sign(payload, secret.secret, { expiresIn: 86400 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET /users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
