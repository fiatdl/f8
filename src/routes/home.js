const express = require("express");
const router = express.Router();
const HomeController=require("../app/controllers/home");
router.get("/", HomeController.index);


module.exports = router;
