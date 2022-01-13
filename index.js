const express = require("express");
const app = express();

const port = 8001;
app.use('/',require('./routes'));   //use express router
app.listen(port, function (err) {
  if (err) {
    console.log("error found", err);
  }
  console.log("Server is running on port", port);
});
