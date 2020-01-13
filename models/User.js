const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require("./Profile");

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  menuObject: {
    type: Object,
    default: {
      menuArray: [
        {
          Title: "Lunch",
          Sections: [],
          Settings: {
            backgroundColor: "Cornsilk"
          }
        }
      ]
    },
    required: true
  },
  images: {
    type: Array,
    default: [],
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
