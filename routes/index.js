const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controllers");
console.log("router id loaded");
router.get("/", homeController.home);
router.use("/users", require("./users"));
//for any furtHer routes, excess from Here
//router.use("/router_name",require("./router_file"));
module.exports = router;
