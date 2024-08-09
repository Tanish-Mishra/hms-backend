const express = require("express");
const auth_controller = require("../controller/auth");
const auth_router = express.Router();
auth_router.post("/hms/signup",auth_controller.signup);
auth_router.post("/hms/signin", auth_controller.signin);
auth_router.post("/hms/doctorsignin", auth_controller.doctorsignin);
module.exports = auth_router;