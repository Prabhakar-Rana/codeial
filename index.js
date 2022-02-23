const express = require("express");
const app = express();

const port = 8001;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
app.use(express.static("./assets"));
app.use(expressLayouts);
const home= require("./controllers/home_controllers");
app.use("/", require("./routes")); //use express router
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port, function (err) {
  if (err) {
    console.log("error found", err);
  }
  console.log("Server is running on port", port);
});
