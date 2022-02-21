const express = require("express");
const { home } = require("./controllers/home_controllers");
const app = express();

const port = 8001;
app.use("/", require("./routes")); //use express router
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port, function (err) {
  if (err) {
    console.log("error found", err);
  }
  console.log("Server is running on port", port);
});
