const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const menus = require("./routes/api/menus");

const app = express();

// BOdy parser middleware
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

app.get("/", (req, res) => res.send("hello!!!!!"));

// Use Routes
app.use("/users", users);
app.use("/profile", profile);
app.use("/menu s", menus);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
