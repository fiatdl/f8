const express = require("express");
const router = express.Router();
const LoginController = require("../app/controllers/login");
router.get("/", LoginController.index);

router.post("/",LoginController.checkEmail,LoginController.login);
module.exports = router;
