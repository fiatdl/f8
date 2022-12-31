const express = require("express");
const router = express.Router();
const LogOutController = require("../app/controllers/logout");

router.get("/", LogOutController.index);

module.exports = router;
