const { getCSP } = require("csp-header");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const dashboard = require("./routes/api/dashboard");
const menus = require("./routes/api/menus");
const menubuilder = require("./routes/api/menubuilder");
//const uploads = require("./routes/api/uploads");

const app = express();

// getCSP({
//   directives: {
//     "script-src": ["self", "*.bootstrapcdn.com"],
//     "style-src": ["self"],
//     "img-src": ["self"]
//   }
// });

// Body parser middleware
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);
app.use(
  bodyParser.json({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

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
app.use(express.static(__dirname + "/dist/app-name"));
app.use(passport.initialize());

//Passport config
require("./config/passport.js")(passport);

app.use("/uploads", express.static("uploads"));
// Use Routes
app.use("/users", users);
app.use("/dashboard", dashboard);
app.use("/menu", menus);
app.use("/menubuilder", menubuilder);
//app.use("/uploads", uploads);

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
