const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  mainheader: {
    type: String,
    default: "My Menu"
  },
  handle: {
    type: String,
    default: ""
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
