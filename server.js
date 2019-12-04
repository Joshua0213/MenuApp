const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const dashboard = require("./routes/api/dashboard");
const menus = require("./routes/api/menus");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongodb
mongoose
  .connect(
    "mongodb+srv://Admin:Admin@menuapp-ydfi7.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
mongoose.set("useFindAndModify", false);
// Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport.js")(passport);

// Use Routes
app.use("/users", users);
app.use("/dashboard", dashboard);
app.use("/menus", menus);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
