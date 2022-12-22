const express = require("express");
const router = express.Router();
const LoginController = require("../app/controllers/login");
router.get("/", LoginController.index);
router.post("/resister",LoginController.test);
router.post("/sign",LoginController.login);
module.exports = router;
