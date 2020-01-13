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
    }
  },
  images: {
    type: Array
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
