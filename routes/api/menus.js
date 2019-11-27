const express = require("express");
const router = express.Router();

// @route   GET /menus/test
// @desc    Tests menus route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Menus works" }));

module.exports = router;
