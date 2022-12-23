const express = require("express");
const router = express.Router();
const UserController = require("../app/controllers/user");
router.get("/:id", UserController.private);
router.get("/", UserController.index);

module.exports = router;
